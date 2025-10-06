import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { DollarSign, TrendingDown, Zap, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Transparent <span className="bg-gradient-jade bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Volume-based pricing designed to scale with your business. 
              No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 border-primary/20 shadow-jade">
              <div className="text-center mb-12">
                <DollarSign className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Volume-Based Pricing
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We offer transparent, volume-based pricing for on-/off-ramp transactions and business tools. 
                  Network fees may apply based on the target chain and are either merchant- or payer-funded depending on configuration.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <TrendingDown className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Volume Discounts</h3>
                      <p className="text-sm text-muted-foreground">
                        Lower rates as your transaction volume grows
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Network Fees</h3>
                      <p className="text-sm text-muted-foreground">
                        Chain-dependent costs, configurable who pays
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Corridor-Based</h3>
                      <p className="text-sm text-muted-foreground">
                        Rates vary by payment corridors and regions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Custom Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Tailored pricing for API and enterprise needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <p className="text-foreground font-medium mb-4">
                  Contact sales for a tailored quote based on your specific needs:
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                  <span className="bg-background px-4 py-2 rounded-full">Payment Corridors</span>
                  <span className="bg-background px-4 py-2 rounded-full">Transaction Volumes</span>
                  <span className="bg-background px-4 py-2 rounded-full">Integration Path</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">What's Included</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to accept and send USSC payments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "On-/off-ramp access",
                "API & webhooks",
                "Transaction monitoring",
                "Compliance tools",
                "CSV exports",
                "Email support",
                "SDK access",
                "Documentation",
                "Partner network"
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-background rounded-lg border border-border"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Pricing FAQ</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How are network fees calculated?",
                  a: "Network fees depend on the blockchain used and current network congestion. These can be configured to be paid by either the merchant or the customer."
                },
                {
                  q: "Are there setup fees or monthly minimums?",
                  a: "Setup requirements vary by integration type and volume. Contact sales for details on your specific use case."
                },
                {
                  q: "How do volume discounts work?",
                  a: "Pricing tiers are based on monthly transaction volume. As your business grows, you automatically qualify for lower per-transaction rates."
                },
                {
                  q: "Can I get a custom pricing plan?",
                  a: "Yes. We work with each business to create pricing that fits their corridors, volumes, and integration requirements."
                }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 border-border hover:shadow-jade transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
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
              Ready to discuss pricing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a custom quote tailored to your business needs and transaction volumes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-jade border-0 shadow-jade hover:shadow-glow transition-all duration-300" asChild>
                <a href="mailto:sales@jadechain.io">Contact Sales</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
