import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format, isWeekend } from "date-fns";
import emailjs from "emailjs-com";
import { ArrowLeft, ArrowRight, Check, Loader2, Mail, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  "Finance & Banking",
  "Pharma & Life Sciences",
  "Legal & Compliance",
  "Retail & E-commerce",
  "Manufacturing",
  "Telecom & Utilities",
  "Education",
  "Government",
  "Other",
];

const PRODUCTS = ["AI Studio", "GenAI Engine", "Analytics", "Intelligence", "Not sure yet"];

const DEPLOYMENTS = [
  { value: "Air-gapped", hint: "No internet connectivity" },
  { value: "On-premises", hint: "Your data centre" },
  { value: "Private cloud", hint: "Your VPC / tenancy" },
  { value: "Undecided", hint: "Help us choose" },
];

const TIMES = [
  ["09:00", "9:00 AM"],
  ["10:00", "10:00 AM"],
  ["11:00", "11:00 AM"],
  ["12:00", "12:00 PM"],
  ["14:00", "2:00 PM"],
  ["15:00", "3:00 PM"],
  ["16:00", "4:00 PM"],
  ["17:00", "5:00 PM"],
];

const formSchema = z.object({
  fullName: z.string().trim().min(1, { message: "Please enter your name" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid work email" }).max(255),
  company: z.string().trim().min(1, { message: "Please enter your company" }).max(100),
  role: z.string().trim().max(100).optional(),
  industry: z.string().min(1, { message: "Please pick your industry" }),
  products: z.array(z.string()),
  deployment: z.string().optional(),
  areasOfInterest: z.string().max(1000).optional(),
  preferredDate: z.date().optional(),
  preferredTime: z.string().optional(),
  hearAboutUs: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const STEPS: { title: string; fields: (keyof FormValues)[] }[] = [
  { title: "About you", fields: ["fullName", "email", "company", "role", "industry"] },
  { title: "Your needs", fields: ["products", "deployment", "areasOfInterest"] },
  { title: "Pick a time", fields: ["preferredDate", "preferredTime", "hearAboutUs"] },
];

const EXPECT = [
  ["Personalized walkthrough", "The platform shown against your use case — not a generic slide deck."],
  ["Industry-specific examples", "Real applications relevant to your industry and regulatory context."],
  ["Deployment & integration", "How KOGNIX fits your infrastructure, security model and existing systems."],
  ["Q&A with specialists", "Direct answers from our AI and engineering team."],
];

const Chip = ({
  selected,
  onClick,
  children,
  hint,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  hint?: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={selected}
    className={cn(
      "rounded-xl border px-4 py-2.5 text-left text-sm transition-colors",
      selected
        ? "border-primary bg-primary/10 text-foreground"
        : "border-border hover:border-foreground/40"
    )}
  >
    <span className="flex items-center gap-2">
      {selected && <Check className="h-3.5 w-3.5 text-primary" />}
      {children}
    </span>
    {hint && <span className="mt-0.5 block text-xs text-muted-foreground">{hint}</span>}
  </button>
);

const BookDemo = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const formTop = useRef<HTMLDivElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      role: "",
      industry: "",
      products: [],
      deployment: "",
      areasOfInterest: "",
      preferredTime: "",
      hearAboutUs: "",
    },
  });

  const goTo = (next: number) => {
    setStep(next);
    formTop.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const nextStep = async () => {
    const valid = await form.trigger(STEPS[step].fields);
    if (valid) goTo(step + 1);
  };

  const onSubmit = async (data: FormValues) => {
    // Extra answers are folded into the existing EmailJS template fields.
    const details = [
      data.role && `Role: ${data.role}`,
      data.products.length > 0 && `Products: ${data.products.join(", ")}`,
      data.deployment && `Deployment: ${data.deployment}`,
      data.areasOfInterest && `Notes: ${data.areasOfInterest}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const result = await emailjs.send(
        "service_h0q2ber",
        "template_cu2l9vl",
        {
          fullName: data.fullName,
          email: data.email,
          company: data.company,
          industry: data.industry || "N/A",
          preferredDate: data.preferredDate ? data.preferredDate.toDateString() : "Not specified",
          preferredTime: data.preferredTime ? `${data.preferredTime} IST` : "Not specified",
          areasOfInterest: details || "Not specified",
          hearAboutUs: data.hearAboutUs || "Not specified",
        },
        "1-1rwolEnwA6YCr96"
      );

      if (result.status === 200) {
        setSubmitted(data);
        form.reset();
        setStep(0);
        formTop.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at sales@vailabs.in",
        variant: "destructive",
      });
    }
  };

  const values = form.watch();
  const isLast = step === STEPS.length - 1;
  const submitting = form.formState.isSubmitting;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-6 pt-32 pb-24 lg:pt-40">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left: context */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Book a demo
              </p>
              <h1 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
                See KOGNIX on your terms.
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Our experts will walk you through the platform and discuss how it
                fits your data, your infrastructure and your use cases.
              </p>

              <ol className="mt-12 border-t border-border">
                {EXPECT.map(([title, body], i) => (
                  <li key={title} className="flex gap-5 border-b border-border py-5">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-medium">{title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 space-y-3 text-sm">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Prefer to talk now?
                </p>
                <a href="tel:+919148555031" className="flex items-center gap-3 hover:text-primary">
                  <Phone className="h-4 w-4 text-muted-foreground" /> +91 9148 555 031
                </a>
                <a href="mailto:sales@vailabs.in" className="flex items-center gap-3 hover:text-primary">
                  <Mail className="h-4 w-4 text-muted-foreground" /> sales@vailabs.in
                </a>
              </div>
            </div>
          </aside>

          {/* Right: form */}
          <div ref={formTop} className="scroll-mt-28 lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card">
              {submitted ? (
                <div className="p-8 md:p-12">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-6 w-6" />
                  </span>
                  <h2 className="mt-8 text-3xl font-medium tracking-tight">
                    Thanks, {submitted.fullName.split(" ")[0]}. Request received.
                  </h2>
                  <p className="mt-4 max-w-lg text-muted-foreground">
                    Our team will contact you at <span className="text-foreground">{submitted.email}</span>{" "}
                    shortly to confirm your demo.
                  </p>

                  <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                    {[
                      ["Company", submitted.company],
                      ["Industry", submitted.industry],
                      [
                        "Preferred slot",
                        submitted.preferredDate
                          ? `${format(submitted.preferredDate, "EEE, d MMM")}${submitted.preferredTime ? ` · ${submitted.preferredTime} IST` : ""}`
                          : "We'll suggest times",
                      ],
                      ["Deployment", submitted.deployment || "To discuss"],
                    ].map(([k, v]) => (
                      <div key={k} className="bg-card px-5 py-4">
                        <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{k}</dt>
                        <dd className="mt-1 text-sm">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    While you wait
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button asChild variant="outline">
                      <Link to="/assessment">Take the AI Readiness Assessment</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/reference-architecture">View reference architecture</Link>
                    </Button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(null)}
                    className="mt-8 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  {/* Progress */}
                  <div className="border-b border-border px-6 pt-6 md:px-10 md:pt-8">
                    <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      <span>
                        Step {step + 1} of {STEPS.length}
                      </span>
                      <span>~1 minute</span>
                    </div>
                    <ol className="mt-5 grid grid-cols-3 gap-2 pb-6">
                      {STEPS.map((s, i) => (
                        <li key={s.title}>
                          <button
                            type="button"
                            disabled={i > step}
                            onClick={() => i < step && goTo(i)}
                            className="w-full text-left disabled:cursor-default"
                          >
                            <span className="block h-1 overflow-hidden rounded-full bg-muted">
                              <span
                                className="block h-full origin-left rounded-full bg-primary transition-transform duration-500"
                                style={{ transform: `scaleX(${i <= step ? 1 : 0})` }}
                              />
                            </span>
                            <span
                              className={cn(
                                "mt-2 block text-sm",
                                i === step ? "text-foreground" : "text-muted-foreground"
                              )}
                            >
                              {s.title}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <Form {...form}>
                    <form
                      onSubmit={(e) => {
                        // Enter on an earlier step advances instead of submitting.
                        if (!isLast) {
                          e.preventDefault();
                          nextStep();
                          return;
                        }
                        form.handleSubmit(onSubmit)(e);
                      }}
                      className="p-6 md:p-10"
                    >
                      <div key={step} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        {step === 0 && (
                          <>
                            <div className="grid gap-6 sm:grid-cols-2">
                              <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Full name</FormLabel>
                                    <FormControl>
                                      <Input autoComplete="name" placeholder="Priya Sharma" className="h-11" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Work email</FormLabel>
                                    <FormControl>
                                      <Input type="email" autoComplete="email" placeholder="priya@company.com" className="h-11" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Company</FormLabel>
                                    <FormControl>
                                      <Input autoComplete="organization" placeholder="Company name" className="h-11" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>
                                      Role <span className="font-normal text-muted-foreground">(optional)</span>
                                    </FormLabel>
                                    <FormControl>
                                      <Input autoComplete="organization-title" placeholder="e.g. CTO, Head of IT" className="h-11" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <FormField
                              control={form.control}
                              name="industry"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Industry</FormLabel>
                                  <div className="flex flex-wrap gap-2">
                                    {INDUSTRIES.map((ind) => (
                                      <Chip key={ind} selected={field.value === ind} onClick={() => field.onChange(ind)}>
                                        {ind}
                                      </Chip>
                                    ))}
                                  </div>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </>
                        )}

                        {step === 1 && (
                          <>
                            <FormField
                              control={form.control}
                              name="products"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    What would you like to see? <span className="font-normal text-muted-foreground">(pick any)</span>
                                  </FormLabel>
                                  <div className="flex flex-wrap gap-2">
                                    {PRODUCTS.map((p) => {
                                      const selected = field.value.includes(p);
                                      return (
                                        <Chip
                                          key={p}
                                          selected={selected}
                                          onClick={() =>
                                            field.onChange(selected ? field.value.filter((v) => v !== p) : [...field.value, p])
                                          }
                                        >
                                          {p !== "Not sure yet" && (
                                            <span className="font-semibold tracking-[0.08em]">KOGNIX</span>
                                          )}
                                          {p}
                                        </Chip>
                                      );
                                    })}
                                  </div>
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="deployment"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Where would it run?</FormLabel>
                                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                                    {DEPLOYMENTS.map((d) => (
                                      <Chip
                                        key={d.value}
                                        selected={field.value === d.value}
                                        onClick={() => field.onChange(field.value === d.value ? "" : d.value)}
                                        hint={d.hint}
                                      >
                                        {d.value}
                                      </Chip>
                                    ))}
                                  </div>
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="areasOfInterest"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    What should we focus on? <span className="font-normal text-muted-foreground">(optional)</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder="Use cases, data sources, compliance requirements, questions for the team…"
                                      className="min-h-[120px] resize-none"
                                      maxLength={1000}
                                      {...field}
                                    />
                                  </FormControl>
                                  <p className="text-right font-mono text-[10px] text-muted-foreground">
                                    {field.value?.length ?? 0} / 1000
                                  </p>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </>
                        )}

                        {step === 2 && (
                          <>
                            <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                              <FormField
                                control={form.control}
                                name="preferredDate"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Preferred date</FormLabel>
                                    <div className="w-fit rounded-xl border border-border">
                                      <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) => date < new Date() || isWeekend(date)}
                                        showOutsideDays={false}
                                        className="p-3"
                                        classNames={{
                                          day_selected:
                                            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                                          day_today: "ring-1 ring-inset ring-border",
                                        }}
                                      />
                                    </div>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="preferredTime"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>
                                      Preferred time <span className="font-normal text-muted-foreground">(IST)</span>
                                    </FormLabel>
                                    <div className="grid grid-cols-2 gap-2">
                                      {TIMES.map(([value, label]) => (
                                        <Chip
                                          key={value}
                                          selected={field.value === value}
                                          onClick={() => field.onChange(field.value === value ? "" : value)}
                                        >
                                          {label}
                                        </Chip>
                                      ))}
                                    </div>
                                    {!values.preferredDate && (
                                      <p className="text-xs text-muted-foreground">
                                        No date in mind? Leave it blank and we'll suggest a few slots.
                                      </p>
                                    )}
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="hearAboutUs"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    How did you hear about us? <span className="font-normal text-muted-foreground">(optional)</span>
                                  </FormLabel>
                                  <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="h-11">
                                        <SelectValue placeholder="Select an option" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="Search engine">Search engine</SelectItem>
                                      <SelectItem value="LinkedIn / social media">LinkedIn / social media</SelectItem>
                                      <SelectItem value="Referral">Referral</SelectItem>
                                      <SelectItem value="Event / conference">Event / conference</SelectItem>
                                      <SelectItem value="News / article">News / article</SelectItem>
                                      <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </FormItem>
                              )}
                            />

                            {/* Summary */}
                            <div className="rounded-xl border border-border bg-muted/40 p-5 text-sm">
                              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                                Your request
                              </p>
                              <p className="mt-2">
                                <span className="font-medium">{values.fullName}</span>
                                {values.role && `, ${values.role}`} · {values.company} · {values.industry}
                              </p>
                              <p className="mt-1 text-muted-foreground">
                                {values.products.length > 0 ? values.products.join(", ") : "Platform overview"}
                                {values.deployment && ` · ${values.deployment}`}
                                {values.preferredDate &&
                                  ` · ${format(values.preferredDate, "EEE, d MMM")}${values.preferredTime ? `, ${values.preferredTime} IST` : ""}`}
                              </p>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Navigation */}
                      <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
                        {step > 0 ? (
                          <Button type="button" variant="ghost" onClick={() => goTo(step - 1)}>
                            <ArrowLeft className="h-4 w-4" /> Back
                          </Button>
                        ) : (
                          <span className="text-xs text-muted-foreground">Only name, email, company and industry are required.</span>
                        )}
                        {isLast ? (
                          <Button key="submit" type="submit" size="lg" disabled={submitting}>
                            {submitting ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                              </>
                            ) : (
                              <>
                                Request demo <ArrowRight className="h-4 w-4" />
                              </>
                            )}
                          </Button>
                        ) : (
                          <Button key="next" type="button" size="lg" onClick={nextStep}>
                            Continue <ArrowRight className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookDemo;
