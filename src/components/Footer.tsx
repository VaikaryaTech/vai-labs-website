import { Link } from "react-router-dom";
import logoNetwork from "@/assets/logo-network.png";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoNetwork} alt="Vaikarya AI LABS" className="h-10 w-10" />
              <span className="text-xl font-bold">Vaikarya AI LABS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade Generative AI for secure, on-premises deployment
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/product" className="text-sm text-muted-foreground hover:text-foreground transition-colors"><span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX</span></Link></li>
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
              <li><Link to="/business-applications" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Business Applications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link to="/documentation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API Reference</Link></li>
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
