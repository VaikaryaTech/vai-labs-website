import { Link } from "react-router-dom";
import logoNetwork from "@/assets/logo.gif";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoNetwork} alt="VAIKARYA AI LABs" className="h-10 w-10" />
              <span className="text-xl font-bold">VAIKARYA AI LABs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade Generative AI for secure, on-premises deployment
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enterprise Products</h4>
            <ul className="space-y-2">
              <li><Link to="/product" className="text-sm text-muted-foreground hover:text-foreground transition-colors"><span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span> <span className="text-cyan-accent">GenAI Engine</span></Link></li>
              <li><Link to="/observability" className="text-sm text-muted-foreground hover:text-foreground transition-colors"><span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span> <span className="text-cyan-accent">Analytix</span></Link></li>
              <li><Link to="/kognix-intelligence" className="text-sm text-muted-foreground hover:text-foreground transition-colors"><span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span> <span className="text-cyan-accent">Intelligence</span></Link></li>
              <li><Link to="/kognix-mobile" className="text-sm text-muted-foreground hover:text-foreground transition-colors"><span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span> <span className="text-cyan-accent">Mobile</span></Link></li>
              <li><Link to="/kognix-ai-studio" className="text-sm text-muted-foreground hover:text-foreground transition-colors"><span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span> <span className="text-cyan-accent">AI Studio</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Application Areas</h4>
            <ul className="space-y-2">
              <li><Link to="/industries/finance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Finance & Banking</Link></li>
              <li><Link to="/industries/healthcare" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Healthcare & Pharma</Link></li>
              <li><Link to="/industries/legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Legal & Compliance</Link></li>
              <li><Link to="/industries/retail" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Retail & E-commerce</Link></li>
              <li><Link to="/industries/manufacturing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Manufacturing & Engineering</Link></li>
              <li><Link to="/industries/telecom" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Telecom & Utilities</Link></li>
              <li><Link to="/industries/education" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Education & Academia</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Vaikarya Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
