import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Zap, Globe, Code, CheckCircle, Clock, DollarSign, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Move money at{" "}
              <span className="bg-gradient-jade bg-clip-text text-transparent">
                internet speed
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              USSC is a dollar-denominated stablecoin designed for global merchants who buy and sell into the United States.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-jade border-0 shadow-jade hover:shadow-glow transition-all duration-300 text-base" asChild>
                <Link to="/buy">Buy USSC</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/accept">Accept USSC</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 animate-slide-up">
              <Shield className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold text-foreground">FinCEN-registered MSB</h3>
              <p className="text-sm text-muted-foreground">Jadechain Technologies, Inc.</p>
            </div>
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Lock className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold text-foreground">Risk-based AML/KYC</h3>
              <p className="text-sm text-muted-foreground">Compliance-first operations</p>
            </div>
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <DollarSign className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold text-foreground">On-/Off-ramp partners</h3>
              <p className="text-sm text-muted-foreground">Seamless fiat conversion</p>
            </div>
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Zap className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold text-foreground">Real-time settlement</h3>
              <p className="text-sm text-muted-foreground">On supported chains</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why choose <span className="bg-gradient-jade bg-clip-text text-transparent">USSC</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for businesses that need fast, compliant, and programmable cross-border payments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 animate-slide-up">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Near-instant settlement</h3>
              <p className="text-muted-foreground">
                Minimize pre-funding and clear payments in minutes, not days. Say goodbye to slow wire transfers and correspondent banking delays.
              </p>
            </Card>

            <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Global reach</h3>
              <p className="text-muted-foreground">
                Enable buyers and suppliers to transact across borders 24/7/365. No more banking hours or weekend delays.
              </p>
            </Card>

            <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Programmable</h3>
              <p className="text-muted-foreground">
                Automate payouts, escrow, and invoicing with smart contracts. Build custom payment flows that match your business logic.
              </p>
            </Card>

            <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Compliance-ready</h3>
              <p className="text-muted-foreground">
                BSA/AML controls and reporting workflows for regulated businesses. Work with a registered MSB that understands compliance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-primary/20 shadow-jade max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join businesses worldwide using USSC for faster, cheaper, and more transparent cross-border payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-jade border-0 shadow-jade hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/buy">Buy USSC</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
