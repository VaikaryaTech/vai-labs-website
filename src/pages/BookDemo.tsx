import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Clock, Users, MessageSquare, Network } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const formSchema = z.object({
  fullName: z.string().trim().min(1, { message: "Full name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  company: z.string().trim().min(1, { message: "Company name is required" }).max(100),
  industry: z.string().optional(),
  preferredDate: z.date().optional(),
  preferredTime: z.string().optional(),
  areasOfInterest: z.string().max(1000).optional(),
  hearAboutUs: z.string().optional(),
});

const BookDemo = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      industry: "",
      preferredTime: "",
      areasOfInterest: "",
      hearAboutUs: "",
    },
  });

const onSubmit = async (data: z.infer<typeof formSchema>) => {
  try {
    // Send using EmailJS
    const result = await emailjs.send(
      "service_h0q2ber",   
      "template_cu2l9vl",
      {
        fullName: data.fullName,
        email: data.email,
        company: data.company,
        industry: data.industry || "N/A",
        preferredDate: data.preferredDate
          ? data.preferredDate.toDateString()
          : "Not specified",
        preferredTime: data.preferredTime || "Not specified",
        areasOfInterest: data.areasOfInterest || "Not specified",
        hearAboutUs: data.hearAboutUs || "Not specified",
      },
      "1-1rwolEnwA6YCr96" 
    );

    if (result.status === 200) {
      toast({
        title: "✅ Demo request submitted!",
        description:
          "Thank you! Our team will contact you shortly to confirm your demo.",
      });
      form.reset();
    }
  } catch (error) {
    console.error("Email send error:", error);
    toast({
      title: "❌ Something went wrong",
      description: "Please try again or email us directly at sales@vailabs.in",
      variant: "destructive",
    });
  }
};

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500">
              Experience the Future
            </h1>
            <p className="text-lg text-muted-foreground">
              See our Generative AI engine in action. Our experts will walk you through its capabilities 
              and discuss how it can specifically benefit your business.
            </p>
          </div>

          {/* What to Expect Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What to Expect in Your Demo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Walkthrough</h3>
                <p className="text-muted-foreground">
                  Get a customized demonstration of the GenAI engine's features tailored to your specific use case.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry-Specific Examples</h3>
                <p className="text-muted-foreground">
                  See real-world applications and examples relevant to your industry and business needs.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Q&A with AI Specialists</h3>
                <p className="text-muted-foreground">
                  Ask questions and get expert insights from our AI specialists and technical team.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integration Strategy Discussion</h3>
                <p className="text-muted-foreground">
                  Explore how our GenAI engine can integrate with your existing systems and workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Book Your Demo</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
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
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
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
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Preferred Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd-MM-yyyy")
                                ) : (
                                  <span>dd-mm-yyyy</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className="p-3 pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="09:00">09:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="14:00">02:00 PM</SelectItem>
                            <SelectItem value="15:00">03:00 PM</SelectItem>
                            <SelectItem value="16:00">04:00 PM</SelectItem>
                            <SelectItem value="17:00">05:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="areasOfInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specific Areas of Interest</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your specific use cases or questions for the demo..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hearAboutUs"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How did you hear about us?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="search">Search Engine</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="event">Event/Conference</SelectItem>
                            <SelectItem value="news">News/Article</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full">
                    Request Demo
                  </Button>
                </form>
              </Form>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground">
                  Prefer to speak with someone directly? Call us at{" "}
                  <a href="tel:+919148555031" className="text-primary hover:underline">
                    +91 9148 555 031
                  </a>{" "}
                  or email{" "}
                  <a href="mailto:sales@vailabs.in" className="text-primary hover:underline">
                    sales@vailabs.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookDemo;
