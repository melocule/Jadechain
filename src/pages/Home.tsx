import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Zap, Globe, Code, CheckCircle, Clock, DollarSign, Lock, Layers, Wallet, TrendingUp } from "lucide-react";
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
                <Link to="/about#contact">Talk to Sales</Link>
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

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for the demands of modern commerce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 border-border hover:shadow-jade transition-all duration-300">
              <DollarSign className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Dollar-denominated</h3>
              <p className="text-sm text-muted-foreground">
                Price stability and accounting simplicity for your business
              </p>
            </Card>

            <Card className="p-6 border-border hover:shadow-jade transition-all duration-300">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Fast & final</h3>
              <p className="text-sm text-muted-foreground">
                On-chain settlement with auditable transaction history
              </p>
            </Card>

            <Card className="p-6 border-border hover:shadow-jade transition-all duration-300">
              <Layers className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Multi-chain support</h3>
              <p className="text-sm text-muted-foreground">
                Cross-chain bridges for reach and redundancy
              </p>
            </Card>

            <Card className="p-6 border-border hover:shadow-jade transition-all duration-300">
              <Wallet className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">Interoperable</h3>
              <p className="text-sm text-muted-foreground">
                Works with major wallets and payment partners
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* For Merchants */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Designed for <span className="bg-gradient-jade bg-clip-text text-transparent">Merchants</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                USSC is built for merchants who source globally and sell into the U.S. Use it to pay suppliers, 
                accept customer payments, and sweep balances to bank accounts through off-ramp partners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Faster settlement</h3>
                    <p className="text-sm text-muted-foreground">
                      Get paid faster than international wires
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Lower overhead</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduce operational costs vs. legacy correspondent banking
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Chargeback-resilient</h3>
                    <p className="text-sm text-muted-foreground">
                      Strong fraud controls via trusted partners
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Real-time payouts</h3>
                    <p className="text-sm text-muted-foreground">
                      Automated reconciliation exports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Simple, seamless payment flow from customer to merchant
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Customer initiates payment",
                  description: "Customer chooses 'Pay with USSC' or buys USSC via a checkout link"
                },
                {
                  step: "2",
                  title: "Partner processes transaction",
                  description: "Our partner handles KYC, payment processing, and token delivery"
                },
                {
                  step: "3",
                  title: "On-chain settlement",
                  description: "Funds settle on-chain; you receive USSC to your wallet"
                },
                {
                  step: "4",
                  title: "Off-ramp when ready",
                  description: "Convert to fiat through a connected partner or keep balances in USSC"
                }
              ].map((item, index) => (
                <Card 
                  key={item.step} 
                  className="p-6 border-border hover:shadow-jade transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-jade flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
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
                <Link to="/about#contact">Contact Sales</Link>
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
