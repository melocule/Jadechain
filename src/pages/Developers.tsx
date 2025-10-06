import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Link as LinkIcon, Box, Terminal, FileCode, Webhook } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Developers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              <span className="bg-gradient-jade bg-clip-text text-transparent">Developers</span> & Integrations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrate USSC payments in a few lines using hosted checkout links, embeddable widgets, 
              or APIs from our on-/off-ramp partners. Use webhooks for confirmations and export CSVs for reconciliation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-jade border-0 shadow-jade hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/contact">Request API Access</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Paths */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Typical Integration Paths</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the integration method that best fits your technical requirements and timeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 animate-slide-up">
              <LinkIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Hosted Checkout Link</h3>
              <p className="text-muted-foreground mb-6">
                Fastest go-live; no backend changes required. Perfect for getting started quickly.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">5-minute setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">No coding required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Secure hosted page</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Box className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Embedded Widget</h3>
              <p className="text-muted-foreground mb-6">
                Seamless UI within your site or portal. Provides a native experience for your users.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Custom branding</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Embedded checkout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">JavaScript SDK</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Terminal className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Direct API</h3>
              <p className="text-muted-foreground mb-6">
                Full control, customized flows, and advanced automation capabilities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Complete control</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Custom workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">RESTful API</span>
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
              <h2 className="text-4xl font-bold text-foreground mb-4">Developer Tools</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to build and scale with USSC
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Webhook className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Webhooks</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time notifications for payment confirmations, settlements, and status updates
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FileCode className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">SDKs & Code Samples</h3>
                    <p className="text-sm text-muted-foreground">
                      Ready-to-use libraries and examples available upon request for major languages
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Code className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">API Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive guides, reference docs, and interactive API explorers
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Terminal className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">CSV Exports</h3>
                    <p className="text-sm text-muted-foreground">
                      Export transaction data for reconciliation and accounting workflows
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Simple Integration</h2>
              <p className="text-lg text-muted-foreground">
                Get started with just a few lines of code
              </p>
            </div>

            <Card className="p-8 bg-card border-border">
              <div className="bg-muted rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <div className="text-muted-foreground mb-4">// Initialize USSC payment</div>
                <div className="text-foreground">
                  <span className="text-accent">const</span> payment = <span className="text-accent">await</span> ussc.<span className="text-primary">createPayment</span>({"{"}
                </div>
                <div className="text-foreground pl-4">
                  amount: <span className="text-accent">&quot;100.00&quot;</span>,
                </div>
                <div className="text-foreground pl-4">
                  currency: <span className="text-accent">&quot;USD&quot;</span>,
                </div>
                <div className="text-foreground pl-4">
                  customerId: <span className="text-accent">&quot;cust_123&quot;</span>
                </div>
                <div className="text-foreground">{"}"});</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-primary/20 shadow-jade max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to integrate?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get API access and start building with USSC payments today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-jade border-0 shadow-jade hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/contact">Request Access</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/docs">Read Documentation</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developers;
