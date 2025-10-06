import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mail, Building, Users, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              About <span className="bg-gradient-jade bg-clip-text text-transparent">Jadechain</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building payment infrastructure for global commerce into the United States
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="p-12 border-primary/20 shadow-jade">
              <div className="text-center mb-8">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                Jadechain Technologies, Inc. builds payment infrastructure for global commerce into the United States. 
                Our leadership brings deep experience in payments, compliance, and cross-border business. 
                We combine modern blockchain rails with practical, compliance-first operations to make international 
                commerce faster, cheaper, and more transparent.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground">
                Experienced leaders in payments, compliance, and technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-jade mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                  KS
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Ken Sheets</h3>
                <p className="text-primary font-semibold mb-4">Chief Executive Officer & AML Compliance Officer</p>
                <p className="text-sm text-muted-foreground">
                  Leading Jadechain's strategic vision and compliance operations
                </p>
              </Card>

              <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-jade mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                  LL
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Lance Liu</h3>
                <p className="text-primary font-semibold mb-4">President</p>
                <p className="text-sm text-muted-foreground">
                  Overseeing operations and business development
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                We're here to help with any questions about USSC and our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">General Inquiries</h3>
                <a 
                  href="mailto:hello@jadechain.io" 
                  className="text-primary hover:underline"
                >
                  hello@jadechain.io
                </a>
              </Card>

              <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Sales</h3>
                <a 
                  href="mailto:sales@jadechain.io" 
                  className="text-primary hover:underline"
                >
                  sales@jadechain.io
                </a>
              </Card>

              <Card className="p-8 border-border hover:shadow-jade transition-all duration-300 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Compliance</h3>
                <a 
                  href="mailto:compliance@jadechain.io" 
                  className="text-primary hover:underline"
                >
                  compliance@jadechain.io
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-primary/20 shadow-jade max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's build the future of payments together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a merchant, developer, or partner, we'd love to hear from you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-jade border-0 shadow-jade hover:shadow-glow transition-all duration-300" asChild>
                <a href="mailto:sales@jadechain.io">Contact Sales</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/">Explore USSC</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
