import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need a special wallet to use USSC?",
      answer: "No. USSC works with major self‑custody wallets and custodial accounts supported by our partners."
    },
    {
      question: "Can my customers buy USSC with a credit card?",
      answer: "Yes. Our partners offer card and bank transfer options in supported countries."
    },
    {
      question: "How do I convert USSC back to fiat?",
      answer: "Use an off‑ramp partner to settle to bank accounts through local rails (e.g., ACH/SEPA/PIX/SPEI, depending on region)."
    },
    {
      question: "Is USSC available 24/7?",
      answer: "On‑chain transfers are available 24/7/365; certain fiat rails may be limited by local bank hours."
    },
    {
      question: "What about compliance?",
      answer: "Jadechain maintains a BSA/AML program and works with regulated partners for identity verification and monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Frequently Asked <span className="bg-gradient-jade bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about USSC, payments, and our services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-foreground mb-4">Common Questions</h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about USSC and our services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card 
                  key={faq.question} 
                  className="p-8 border-border hover:shadow-jade transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">
                      Q: {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      A: {faq.answer}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to help. Reach out for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@jadechain.io" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-jade text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300"
              >
                Contact Support
              </a>
              <a 
                href="mailto:sales@jadechain.io" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
