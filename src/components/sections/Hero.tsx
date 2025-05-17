
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 lg:py-24 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Real-Time AI-Powered Cricket Scoring
          </h1>
          <p className="text-lg text-muted-foreground">
            Track every ball, analyze performance, and predict outcomes with 
            our advanced cricket scoring platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 h-auto font-medium shadow-lg hover:shadow-xl transition-all">
              <Zap className="mr-2 h-5 w-5" />
              Try it Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto font-medium">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-6 rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-card rounded-lg p-4 shadow-inner">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold">IND vs AUS</h3>
                  <p className="text-sm text-muted-foreground">T20 World Cup</p>
                </div>
                <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                  LIVE
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background p-3 rounded shadow-sm">
                  <div className="font-bold text-2xl">162/4</div>
                  <div className="text-sm">18.2 overs</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    Projected Score
                  </div>
                  <div className="font-bold text-xl text-accent">
                    184-192
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Run Rate</span>
                  <span className="font-medium">8.84</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Required Run Rate</span>
                  <span className="font-medium">9.42</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="text-xs text-muted-foreground mb-2">LAST 5 BALLS</div>
                <div className="flex gap-1.5">
                  {["1", "4", "W", "2", "6"].map((ball, i) => (
                    <div 
                      key={i} 
                      className={`
                        w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium
                        ${ball === "W" ? "bg-destructive text-destructive-foreground" : 
                          ball === "4" || ball === "6" ? "bg-accent text-accent-foreground" : 
                          "bg-muted text-muted-foreground"}
                      `}
                    >
                      {ball}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
            <div className="flex items-center justify-center gap-1">
              <Zap className="h-4 w-4" />
              <span className="font-bold text-lg">AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
