import { Link } from "react-router-dom";
import {
  Landmark,
  FlaskConical,
  Scale,
  ShoppingBag,
  Factory,
  Radio,
  GraduationCap,
} from "lucide-react";

const industries = [
  { to: "/industries/finance", label: "Finance & Banking", Icon: Landmark, tint: "from-emerald-500/30 to-emerald-700/10" },
  { to: "/industries/healthcare", label: "Biopharmaceutical (BioPharma)", Icon: FlaskConical, tint: "from-cyan-500/30 to-cyan-700/10" },
  { to: "/industries/legal", label: "Legal & Compliance", Icon: Scale, tint: "from-amber-500/30 to-amber-700/10" },
  { to: "/industries/retail", label: "Retail & E-commerce", Icon: ShoppingBag, tint: "from-pink-500/30 to-pink-700/10" },
  { to: "/industries/manufacturing", label: "Manufacturing & Engineering", Icon: Factory, tint: "from-orange-500/30 to-orange-700/10" },
  { to: "/industries/telecom", label: "Telecom & Utilities", Icon: Radio, tint: "from-blue-500/30 to-blue-700/10" },
  { to: "/industries/education", label: "Education & Academia", Icon: GraduationCap, tint: "from-purple-500/30 to-purple-700/10" },
];

export const IndustryGrid = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Enterprise <span className="text-glow-cyan">Application Areas</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built AI for the industries that power the enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {industries.map(({ to, label, Icon, tint }) => (
            <Link
              key={to}
              to={to}
              className="group relative glass rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:[transform:perspective(800px)_rotateX(2deg)_rotateY(-2deg)_translateY(-4px)] hover:border-primary/40 hover:shadow-glow-primary"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tint} backdrop-blur-sm transition-all duration-300 group-hover:scale-110`}
              >
                <Icon className="h-7 w-7 text-primary transition-all duration-300 group-hover:text-cyan-accent group-hover:drop-shadow-[0_0_10px_hsl(var(--cyan-accent))]" />
              </div>
              <span className="text-base md:text-lg font-semibold text-foreground">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;
