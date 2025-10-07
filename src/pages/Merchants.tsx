import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { DollarSign, Zap, Clock, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Merchants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              For <span className="bg-gradient-jade bg-clip-text text-transparent">Merchants</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Accept USSC at checkout, get paid faster, and reduce cross‑border friction. With our partners, 
              customers can buy USSC using cards or bank transfers, and you can off‑ramp to local currency when needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-jade border-0 shadow-jade hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/about#contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Why merchants choose USSC for their payment processing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Faster settlement than international wires</h3>
                  <p className="text-sm text-muted-foreground">
                    Get paid in minutes instead of days with traditional banking
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Lower operational overhead vs. legacy correspondent banking</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce costs and complexity of cross-border payments
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Chargeback‑resilient rails with strong fraud controls via partners</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced security measures protect your business
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Real‑time payouts and automated reconciliation exports</h3>
                  <p className="text-sm text-muted-foreground">
                    Streamlined accounting and cash flow management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Simple payment flow from customer to merchant
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Customer chooses \"Pay with USSC\" or buys USSC via a checkout link",
                  description: "Customers can pay using their preferred method through our partner network"
                },
                {
                  step: "2", 
                  title: "Our partner handles KYC, payment processing, and token delivery",
                  description: "Seamless compliance and payment processing handled by trusted partners"
                },
                {
                  step: "3",
                  title: "Funds settle on‑chain; you receive USSC to your wallet",
                  description: "Fast, secure settlement directly to your digital wallet"
                },
                {
                  step: "4",
                  title: "Off‑ramp to fiat through a connected partner or keep balances in USSC",
                  description: "Convert to local currency when needed or maintain USSC balances"
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

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-primary/20 shadow-jade max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to accept USSC?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join merchants worldwide using USSC for faster, more efficient cross-border payments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-jade border-0 shadow-jade hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/about#contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Merchants;
