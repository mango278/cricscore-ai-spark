
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import { Zap, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Stats />
        
        {/* Demo Section */}
        <section className="py-16 container" id="demo">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See it in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch a quick demo of how CricScore AI transforms cricket scoring
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto aspect-video bg-muted rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Compass className="text-accent h-5 w-5" />
                <h3 className="text-xl font-medium">Video Demo</h3>
              </div>
              <p className="text-muted-foreground mt-2">Click to watch the tutorial</p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-muted" id="contact">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have questions about CricScore AI? Our team is here to help you get started.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto bg-card rounded-xl shadow-md p-8">
              <div className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border rounded-md bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border rounded-md bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border rounded-md h-32 bg-background resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium w-full sm:w-auto">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-accent/10">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to elevate your cricket scoring?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of teams using CricScore AI to simplify scoring and enhance match experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 h-auto font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <Zap className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6 h-auto font-medium"
              >
                <Compass className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
