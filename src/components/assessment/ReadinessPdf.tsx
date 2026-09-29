import { Document, Image, Page, Path, Polygon, Line, StyleSheet, Svg, Text, View, Circle } from "@react-pdf/renderer";
import { buildReport, RECOMMENDATIONS, type ReportSection } from "@/components/assessment/readiness-scoring";

const INK = "#0e1219";
const MUTED = "#5b6472";
const FAINT = "#9aa1ac";
const LINE = "#e5e7eb";
const ORANGE = "#f97316";
const PAPER = "#ffffff";

const s = StyleSheet.create({
  page: { paddingTop: 56, paddingBottom: 64, paddingHorizontal: 52, fontFamily: "Helvetica", fontSize: 10, color: INK, backgroundColor: PAPER },
  mono: { fontFamily: "Courier", fontSize: 8, letterSpacing: 1.2, textTransform: "uppercase", color: MUTED },
  h1: { fontFamily: "Helvetica-Bold", fontSize: 22, letterSpacing: -0.4 },
  h2: { fontFamily: "Helvetica-Bold", fontSize: 15, letterSpacing: -0.2, marginTop: 6 },
  body: { fontSize: 10, lineHeight: 1.5, color: MUTED },
  rule: { borderBottomWidth: 1, borderBottomColor: LINE },
  section: { marginTop: 28 },
  footer: { position: "absolute", bottom: 28, left: 52, right: 52, flexDirection: "row", justifyContent: "space-between", fontFamily: "Courier", fontSize: 7, color: FAINT },
});

/** SVG arc path for a progress ring, starting at 12 o'clock. */
const arcPath = (cx: number, cy: number, r: number, pct: number) => {
  const clamped = Math.min(Math.max(pct, 0), 99.99);
  const angle = (clamped / 100) * 2 * Math.PI - Math.PI / 2;
  const x = cx + r * Math.cos(angle);
  const y = cy + r * Math.sin(angle);
  const large = clamped > 50 ? 1 : 0;
  return `M ${cx} ${cy - r} A ${r} ${r} 0 ${large} 1 ${x.toFixed(2)} ${y.toFixed(2)}`;
};

const Footer = ({ label }: { label: string }) => (
  <View style={s.footer} fixed>
    <Text>VAI LABS · KOGNIX · {label}</Text>
    <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
  </View>
);

const Radar = ({ data }: { data: { dimension: string; score: number }[] }) => {
  const size = 230;
  const c = size / 2;
  const R = 78;
  const n = data.length;
  const point = (i: number, v: number) => {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2;
    return [c + (R * v * Math.cos(a)) / 100, c + (R * v * Math.sin(a)) / 100];
  };
  const ring = (v: number) => data.map((_, i) => point(i, v).join(",")).join(" ");
  return (
    <Svg width={size} height={size}>
      {[25, 50, 75, 100].map((v) => (
        <Polygon key={v} points={ring(v)} stroke={LINE} strokeWidth={0.8} fill="none" />
      ))}
      {data.map((_, i) => {
        const [x, y] = point(i, 100);
        return <Line key={i} x1={c} y1={c} x2={x} y2={y} stroke={LINE} strokeWidth={0.8} />;
      })}
      <Polygon points={data.map((d, i) => point(i, d.score).join(",")).join(" ")} fill={ORANGE} fillOpacity={0.22} stroke={ORANGE} strokeWidth={1.4} />
      {data.map((d, i) => {
        const [x, y] = point(i, 128);
        return (
          <Text key={d.dimension} x={x} y={y + 2} style={{ fontSize: 7, fill: MUTED }} textAnchor="middle">
            {d.dimension}
          </Text>
        );
      })}
    </Svg>
  );
};

const QuestionRow = ({ q }: { q: ReportSection["questions"][number] }) => (
  <View style={[s.rule, { flexDirection: "row", paddingVertical: 5 }]} wrap={false}>
    <Text
      style={{
        width: 38,
        fontFamily: "Courier-Bold",
        fontSize: 7.5,
        color: q.answer === "yes" ? INK : q.answer === "no" ? ORANGE : FAINT,
      }}
    >
      {q.answer ? q.answer.toUpperCase() : "OPEN"}
    </Text>
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 8.5, lineHeight: 1.4, color: q.answer ? INK : MUTED }}>{q.text}</Text>
      {q.details ? <Text style={{ fontSize: 8, lineHeight: 1.4, color: MUTED, marginTop: 2 }}>Evidence: {q.details}</Text> : null}
    </View>
  </View>
);

interface Props {
  sections: ReportSection[];
  organization?: string;
  generatedAt?: Date;
}

/** Branded, multi-page readiness report rendered entirely in the browser. */
export const ReadinessPdf = ({ sections, organization, generatedAt = new Date() }: Props) => {
  const r = buildReport(sections);
  const date = generatedAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const org = organization?.trim();

  return (
    <Document title={`AI Readiness Report${org ? ` — ${org}` : ""}`} author="VAI Labs" subject="Generative AI Readiness Assessment" creator="VAI Labs · KOGNIX">
      {/* Cover */}
      <Page size="A4" style={{ backgroundColor: INK, color: PAPER, padding: 52, fontFamily: "Helvetica" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image src="/brand/vai-mark.png" style={{ width: 26, height: 26 }} />
          <Text style={{ marginLeft: 10, fontFamily: "Helvetica-Bold", fontSize: 12 }}>VAI Labs</Text>
          <Text style={{ marginLeft: 8, fontSize: 10, color: FAINT }}>· KOGNIX</Text>
        </View>

        <View style={{ marginTop: 150 }}>
          <Text style={[s.mono, { color: ORANGE }]}>Generative AI Readiness Assessment</Text>
          <Text style={{ marginTop: 14, fontFamily: "Helvetica-Bold", fontSize: 40, letterSpacing: -1, lineHeight: 1.05 }}>
            AI Readiness{"\n"}Report
          </Text>
          {org && <Text style={{ marginTop: 18, fontSize: 16, color: "#d1d5db" }}>Prepared for {org}</Text>}
        </View>

        <View style={{ marginTop: 60, flexDirection: "row", alignItems: "center" }}>
          <Svg width={120} height={120}>
            <Circle cx={60} cy={60} r={50} stroke="#2a313d" strokeWidth={9} fill="none" />
            {r.overall > 0 && r.overall < 100 && (
              <Path d={arcPath(60, 60, 50, r.overall)} stroke={r.band.hex} strokeWidth={9} fill="none" strokeLinecap="round" />
            )}
            {r.overall >= 100 && <Circle cx={60} cy={60} r={50} stroke={r.band.hex} strokeWidth={9} fill="none" />}
          </Svg>
          <View style={{ position: "absolute", left: 0, top: 0, width: 120, height: 120, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 30 }}>{r.overall}</Text>
            <Text style={[s.mono, { color: FAINT, fontSize: 7 }]}>of 100</Text>
          </View>
          <View style={{ marginLeft: 28, flex: 1 }}>
            <Text style={[s.mono, { color: r.band.hex }]}>Maturity · {r.band.label}</Text>
            <Text style={{ marginTop: 8, fontSize: 11, lineHeight: 1.5, color: "#d1d5db" }}>{r.band.tone}</Text>
          </View>
        </View>

        <View style={{ position: "absolute", bottom: 52, left: 52, right: 52, flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={[s.mono, { color: FAINT }]}>Generated</Text>
            <Text style={{ marginTop: 4, fontSize: 10 }}>{date}</Text>
          </View>
          <View>
            <Text style={[s.mono, { color: FAINT }]}>Coverage</Text>
            <Text style={{ marginTop: 4, fontSize: 10 }}>
              {r.totalQuestions - r.unanswered} of {r.totalQuestions} controls answered
            </Text>
          </View>
          <View>
            <Text style={[s.mono, { color: FAINT }]}>Confidential</Text>
            <Text style={{ marginTop: 4, fontSize: 10 }}>Generated in your browser</Text>
          </View>
        </View>
      </Page>

      {/* Summary */}
      <Page size="A4" style={s.page}>
        <Footer label="AI Readiness Report" />
        <Text style={s.mono}>01 · Executive summary</Text>
        <Text style={[s.h1, { marginTop: 10 }]}>Where you stand today</Text>
        <Text style={[s.body, { marginTop: 10 }]}>
          {r.band.tone} Based on {r.totalQuestions} control points across {sections.length} dimensions, your organization
          has {r.yesCount} capabilities in place, {r.noCount} identified gaps
          {r.unanswered > 0 ? `, and ${r.unanswered} unanswered items` : ""}.
        </Text>

        <View style={{ flexDirection: "row", marginTop: 22, borderTopWidth: 1, borderBottomWidth: 1, borderColor: LINE }}>
          {[
            ["Readiness", `${r.overall}/100`],
            ["In place", String(r.yesCount)],
            ["Gaps", String(r.noCount)],
            ["Open", String(r.unanswered)],
          ].map(([k, v], i) => (
            <View key={k} style={{ flex: 1, paddingVertical: 12, paddingLeft: i ? 14 : 0, borderLeftWidth: i ? 1 : 0, borderColor: LINE }}>
              <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 18, color: k === "Gaps" ? ORANGE : INK }}>{v}</Text>
              <Text style={[s.mono, { marginTop: 4 }]}>{k}</Text>
            </View>
          ))}
        </View>

        <View style={{ flexDirection: "row", marginTop: 26 }}>
          <View style={{ width: 230 }}>
            <Text style={s.mono}>Capability radar</Text>
            <Radar data={r.radarData} />
          </View>
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text style={s.mono}>Dimension scores</Text>
            {r.scored.map((d) => (
              <View key={d.id} style={{ marginTop: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ fontSize: 9 }}>{d.title}</Text>
                  <Text style={{ fontFamily: "Courier", fontSize: 9 }}>{d.score}%</Text>
                </View>
                <View style={{ marginTop: 4, height: 4, backgroundColor: "#f1f2f4", borderRadius: 2 }}>
                  <View style={{ width: `${Math.max(d.score, 1)}%`, height: 4, backgroundColor: INK, borderRadius: 2 }} />
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={[s.section, { flexDirection: "row" }]} wrap={false}>
          <View style={{ flex: 1, marginRight: 14 }}>
            <Text style={s.mono}>Top strengths</Text>
            {r.strengths.map((d) => (
              <View key={d.id} style={[s.rule, { paddingVertical: 8 }]}>
                <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10 }}>{d.title}</Text>
                <Text style={[s.body, { fontSize: 9 }]}>{d.score}% of controls in place</Text>
              </View>
            ))}
          </View>
          <View style={{ flex: 1, marginLeft: 14 }}>
            <Text style={[s.mono, { color: ORANGE }]}>Priority focus areas</Text>
            {r.gaps.map((d) => (
              <View key={d.id} style={[s.rule, { paddingVertical: 8 }]}>
                <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 10 }}>{d.title}</Text>
                <Text style={[s.body, { fontSize: 9 }]}>{d.score}% ready</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>

      {/* Roadmap + gaps */}
      <Page size="A4" style={s.page}>
        <Footer label="AI Readiness Report" />
        <Text style={s.mono}>02 · Remediation roadmap</Text>
        <Text style={[s.h1, { marginTop: 10 }]}>What to do next</Text>
        {r.roadmap.length === 0 ? (
          <Text style={[s.body, { marginTop: 12 }]}>All dimensions are fully covered — focus on continuous evaluation and scaling.</Text>
        ) : (
          r.roadmap.map((d, i) => (
            <View key={d.id} style={{ flexDirection: "row", marginTop: i ? 14 : 18 }} wrap={false}>
              <View style={{ width: 86 }}>
                <Text style={[s.mono, { color: ORANGE }]}>{d.timeframe}</Text>
              </View>
              <View style={{ flex: 1, borderLeftWidth: 1, borderColor: LINE, paddingLeft: 14 }}>
                <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 11 }}>
                  {d.title} <Text style={{ fontFamily: "Helvetica", color: MUTED }}>· {d.score}% ready</Text>
                </Text>
                <Text style={[s.body, { marginTop: 3 }]}>{RECOMMENDATIONS[d.title]}</Text>
              </View>
            </View>
          ))
        )}

        {r.criticalGaps.length > 0 && (
          <View style={s.section}>
            <Text style={s.mono}>03 · Gap register</Text>
            <Text style={[s.h2, { marginBottom: 8 }]}>Every control answered "No"</Text>
            {r.criticalGaps.map((g, i) => (
              <View key={i} style={[s.rule, { flexDirection: "row", paddingVertical: 7 }]} wrap={false}>
                <Text style={[s.mono, { width: 140, color: ORANGE, fontSize: 7, lineHeight: 1.4 }]}>{g.section}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 9, lineHeight: 1.45 }}>{g.text}</Text>
                  {g.details ? <Text style={[s.body, { fontSize: 8.5, marginTop: 2 }]}>Note: {g.details}</Text> : null}
                </View>
              </View>
            ))}
          </View>
        )}
      </Page>

      {/* Detailed responses */}
      <Page size="A4" style={s.page}>
        <Footer label="AI Readiness Report" />
        <Text style={s.mono}>04 · Detailed responses</Text>
        <Text style={[s.h1, { marginTop: 10, marginBottom: 6 }]}>All {r.totalQuestions} controls</Text>
        {r.scored.map((d) => {
          const [first, ...rest] = d.questions;
          return (
            <View key={d.id} style={{ marginTop: 16 }}>
              {/* Heading + first question never split, so a heading can't be stranded at a page bottom. */}
              <View wrap={false}>
                <View style={[s.rule, { flexDirection: "row", justifyContent: "space-between", paddingBottom: 5, borderBottomColor: INK }]}>
                  <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 11 }}>
                    {String(d.id).padStart(2, "0")} · {d.title}
                  </Text>
                  <Text style={{ fontFamily: "Courier", fontSize: 10 }}>{d.score}%</Text>
                </View>
                {first && <QuestionRow q={first} />}
              </View>
              {rest.map((q) => (
                <QuestionRow key={q.id} q={q} />
              ))}
            </View>
          );
        })}
      </Page>

      {/* Closing */}
      <Page size="A4" style={{ backgroundColor: INK, color: PAPER, padding: 52, fontFamily: "Helvetica" }}>
        <View style={{ marginTop: 200 }}>
          <Text style={[s.mono, { color: ORANGE }]}>Next step</Text>
          <Text style={{ marginTop: 14, fontFamily: "Helvetica-Bold", fontSize: 30, lineHeight: 1.1, letterSpacing: -0.6 }}>
            Discuss your results{"\n"}with our team.
          </Text>
          <Text style={{ marginTop: 16, fontSize: 11, lineHeight: 1.6, color: "#d1d5db", maxWidth: 380 }}>
            We'll walk through your priority gaps and show how KOGNIX closes them — running entirely inside your own
            infrastructure.
          </Text>
        </View>
        <View style={{ marginTop: 40, borderTopWidth: 1, borderColor: "#2a313d", paddingTop: 16 }}>
          {[
            ["Book a demo", "www.vailabs.in/book-demo"],
            ["Email", "sales@vailabs.in"],
            ["Phone", "+91 9148 555 031"],
          ].map(([k, v]) => (
            <View key={k} style={{ flexDirection: "row", paddingVertical: 6 }}>
              <Text style={[s.mono, { width: 110, color: FAINT }]}>{k}</Text>
              <Text style={{ fontSize: 11 }}>{v}</Text>
            </View>
          ))}
        </View>
        <Text style={{ position: "absolute", bottom: 40, left: 52, right: 52, fontSize: 7.5, lineHeight: 1.5, color: FAINT }}>
          This report is a self-assessment generated from your own answers. It is indicative and does not constitute a
          formal audit. © {generatedAt.getFullYear()} Vaikarya Technologies (OPC) Pvt Ltd.
        </Text>
      </Page>
    </Document>
  );
};

export default ReadinessPdf;
