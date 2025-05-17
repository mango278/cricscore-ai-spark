
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";

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
          
          <div className="max-w-3xl mx-auto aspect-video bg-muted rounded-xl flex items-center justify-center shadow-lg">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Video Demo</h3>
              <p className="text-muted-foreground mt-2">Click to watch the tutorial</p>
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
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 btn">
                Get Started Free
              </button>
              <button className="bg-transparent border border-primary text-primary hover:bg-primary/5 btn">
                Book a Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
