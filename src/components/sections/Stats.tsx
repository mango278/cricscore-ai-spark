
import { useState, useEffect } from 'react';
import Counter from "@/components/ui/Counter";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="stats-section"
      className="py-16 bg-primary text-primary-foreground"
    >
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Trusted by teams worldwide</h2>
          <p className="text-primary-foreground/80">
            Join thousands of cricket enthusiasts already using CricScore AI
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {isVisible && (
            <>
              <div>
                <Counter end={5000} prefix="+" className="text-2xl md:text-4xl" />
                <p className="mt-2 text-primary-foreground/80">Teams</p>
              </div>
              <div>
                <Counter end={12500} prefix="+" className="text-2xl md:text-4xl" />
                <p className="mt-2 text-primary-foreground/80">Matches Created</p>
              </div>
              <div>
                <Counter end={2} suffix="M+" className="text-2xl md:text-4xl" />
                <p className="mt-2 text-primary-foreground/80">Runs Scored</p>
              </div>
              <div>
                <Counter end={98} suffix="%" className="text-2xl md:text-4xl" />
                <p className="mt-2 text-primary-foreground/80">Satisfaction</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;
