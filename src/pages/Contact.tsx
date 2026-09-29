import { useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ArrowRight, ArrowUpRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useScrollMotion } from "@/hooks/use-scroll-motion";
import { cn } from "@/lib/utils";

type FormValues = { name: string; email: string; company: string; subject: string; message: string };

const TOPICS = ["Product demo", "Sales & pricing", "Technical support", "Partnerships", "Careers", "Other"];

const CHANNELS = [
  {
    label: "Sales & product",
    value: "sales@vailabs.in",
    href: "mailto:sales@vailabs.in",
  },
  {
    label: "Technical support",
    value: "support@vailabs.in",
    href: "mailto:support@vailabs.in",
  },
  {
    label: "Phone · Mon–Fri, 10:00–19:00 IST",
    value: "+91 9148 555 031",
    href: "tel:+919148555031",
  },
];

const Contact = () => {
  const root = useRef<HTMLDivElement>(null);
  useScrollMotion(root);
  const [params] = useSearchParams();
  const [topic, setTopic] = useState(params.get("topic") ?? "");
  const [sentTo, setSentTo] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: { subject: params.get("subject") ?? "" } });

  const onSubmit = async (data: FormValues) => {
    try {
      // Reuses the demo-request EmailJS template; the message goes into its notes field.
      await emailjs.send(
        "service_h0q2ber",
        "template_cu2l9vl",
        {
          fullName: data.name,
          email: data.email,
          company: data.company || "Not specified",
          industry: "N/A",
          preferredDate: "N/A",
          preferredTime: "N/A",
          areasOfInterest: `[Contact form] ${topic ? `Topic: ${topic}\n` : ""}Subject: ${data.subject}\n\n${data.message}`,
          hearAboutUs: "Contact page",
        },
        "1-1rwolEnwA6YCr96"
      );
      setSentTo(data.email);
      reset();
      setTopic("");
    } catch (error) {
      console.error("Contact form send error:", error);
      toast.error("Couldn't send your message. Please email sales@vailabs.in directly.");
    }
  };

  return (
    <div ref={root} data-motion className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="container mx-auto px-6 pt-40 pb-16 lg:pt-48">
          <p data-scramble className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Company · Contact
          </p>
          <h1
            data-split="load"
            className="mt-8 max-w-4xl text-balance text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl"
          >
            Let's talk.
          </h1>
          <p data-reveal="0.4" className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Questions about KOGNIX, deployments or partnerships? Send us a message and we'll respond as soon as
            possible.
          </p>
        </section>

        <section className="border-t border-border">
          <div className="container mx-auto grid gap-16 px-6 py-20 lg:grid-cols-12 lg:py-28">
            {/* Direct channels */}
            <aside className="lg:col-span-4">
              <ul className="border-t border-border">
                {CHANNELS.map((c) => (
                  <li key={c.label} className="border-b border-border">
                    <a href={c.href} className="group flex items-center justify-between gap-4 py-6">
                      <span>
                        <span className="block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                          {c.label}
                        </span>
                        <span className="mt-2 block text-lg font-medium tracking-tight transition-colors group-hover:text-primary">
                          {c.value}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </a>
                  </li>
                ))}
                <li className="border-b border-border py-6">
                  <span className="block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Registered office
                  </span>
                  <address className="mt-2 not-italic leading-relaxed">
                    VAI LABS
                    <br />
                    B2 / L4-22 / KBEC, AnanthNagar Ph-2,
                    <br />
                    Electronics City Ph-2, Bangalore 560100,
                    <br />
                    Karnataka, India
                  </address>
                </li>
              </ul>
              <div className="mt-8 rounded-xl bg-muted/50 p-5">
                <p className="text-sm text-muted-foreground">Want to see the platform?</p>
                <Link to="/book-demo" className="mt-1 inline-flex items-center gap-1.5 font-medium hover:text-primary">
                  Book a demo instead <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              {sentTo ? (
                <div className="animate-in fade-in duration-300">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-6 w-6" />
                  </span>
                  <h2 className="mt-8 text-3xl font-medium tracking-tight">Message sent.</h2>
                  <p className="mt-3 max-w-md text-muted-foreground">
                    Thanks for reaching out — we'll reply to <span className="text-foreground">{sentTo}</span> as
                    soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSentTo(null)}
                    className="mt-8 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
                  <div>
                    <p className="text-sm font-medium">What's it about?</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {TOPICS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          aria-pressed={topic === t}
                          onClick={() => setTopic(topic === t ? "" : t)}
                          className={cn(
                            "rounded-full border px-4 py-1.5 text-sm transition-colors",
                            topic === t ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/40"
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" autoComplete="name" className="h-11" placeholder="Your name" {...register("name", { required: "Please enter your name" })} />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work email</Label>
                      <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className="h-11"
                        placeholder="you@company.com"
                        {...register("email", {
                          required: "Please enter your email",
                          pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email" },
                        })}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Company <span className="font-normal text-muted-foreground">(optional)</span>
                    </Label>
                    <Input id="company" autoComplete="organization" className="h-11" placeholder="Company name" {...register("company")} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" className="h-11" placeholder="How can we help?" {...register("subject", { required: "Please add a subject" })} />
                    {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      className="resize-none"
                      placeholder="Tell us more about your inquiry…"
                      {...register("message", { required: "Please write a message" })}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-border pt-6">
                    <p className="text-xs text-muted-foreground">Messages go straight to our team.</p>
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Send message <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
