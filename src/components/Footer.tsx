import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-jade bg-clip-text text-transparent">
              Jadechain
            </h3>
            <p className="text-sm text-muted-foreground">
              Payment infrastructure for global commerce into the United States
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/ussc" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                USSC Stablecoin
              </Link>
              <Link to="/developers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Developers
              </Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/compliance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Compliance
              </Link>
              <a href="mailto:hello@jadechain.io" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="mailto:hello@jadechain.io" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>hello@jadechain.io</span>
              </a>
              <a href="mailto:sales@jadechain.io" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>sales@jadechain.io</span>
              </a>
              <a href="mailto:compliance@jadechain.io" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>compliance@jadechain.io</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Jadechain Technologies, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/legal" className="hover:text-primary transition-colors">
                Legal
              </Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center md:text-left">
            FinCEN-registered Money Services Business. USSC is a fiat-referenced digital asset intended for business use.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
