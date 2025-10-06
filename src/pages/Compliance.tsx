import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, FileText, Users, Lock, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Compliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Compliance <span className="bg-gradient-jade bg-clip-text text-transparent">& Risk</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Jadechain Technologies, Inc. is registered with FinCEN as a Money Services Business (MSB). 
              We operate a risk-based AML program that includes customer due diligence, sanctions screening, 
              ongoing monitoring, and suspicious activity reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="p-12 border-primary/20 shadow-jade text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                FinCEN-Registered Money Services Business
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We maintain full compliance with the Bank Secrecy Act (BSA) and operate under a 
                comprehensive Anti-Money Laundering (AML) program designed for digital asset businesses.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">What This Means for You</h2>
              <p className="text-lg text-muted-foreground">
                Work with a partner committed to regulatory compliance and best practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-border hover:shadow-jade transition-all duration-300">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Compliance-ready onboarding
                </h3>
                <p className="text-muted-foreground">
                  Streamlined onboarding for merchants and partners with proper documentation and verification processes
                </p>
              </Card>

              <Card className="p-8 border-border hover:shadow-jade transition-all duration-300">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Clear roles & responsibilities
                </h3>
                <p className="text-muted-foreground">
                  Defined responsibilities with third-party providers to ensure comprehensive compliance coverage
                </p>
              </Card>

              <Card className="p-8 border-border hover:shadow-jade transition-all duration-300">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Recordkeeping & audit support
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive recordkeeping for B2B payments with audit trails and documentation support
                </p>
              </Card>

              <Card className="p-8 border-border hover:shadow-jade transition-all duration-300">
                <Lock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Training & independent reviews
                </h3>
                <p className="text-muted-foreground">
                  Regular training programs and independent reviews to maintain effective compliance controls
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AML Program */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our AML Program</h2>
              <p className="text-lg text-muted-foreground">
                Risk-based approach to anti-money laundering and counter-terrorist financing
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: "Customer Due Diligence (CDD)",
                  description: "Thorough identity verification and beneficial ownership identification for all business customers"
                },
                {
                  icon: Search,
                  title: "Sanctions Screening",
                  description: "Real-time screening against OFAC, UN, and other global sanctions lists"
                },
                {
                  icon: Shield,
                  title: "Ongoing Monitoring",
                  description: "Continuous transaction monitoring to detect suspicious patterns and unusual activity"
                },
                {
                  icon: FileText,
                  title: "Suspicious Activity Reporting",
                  description: "Timely filing of SARs when required, with proper documentation and follow-up"
                }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="p-8 border-border hover:shadow-jade transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <item.icon className="h-10 w-10 text-primary" />
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
              Questions about compliance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our compliance team is here to help answer your questions and ensure smooth onboarding
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-jade border-0 shadow-jade hover:shadow-glow transition-all duration-300" asChild>
                <a href="mailto:compliance@jadechain.io">Contact Compliance</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Compliance;
