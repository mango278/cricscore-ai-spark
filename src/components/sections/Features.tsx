
import { Calendar, List, ChartLineUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <List className="h-8 w-8" />,
    title: "Ball-by-Ball Entry",
    description: "Quick and intuitive ball logging with smart defaults and keyboard shortcuts for rapid scoring.",
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Live Scoreboard",
    description: "Real-time updates visible to all spectators with responsive design for all devices.",
  },
  {
    icon: <ChartLineUp className="h-8 w-8" />,
    title: "Expected Score Projection",
    description: "AI-driven prediction of final scores based on current run rate, wickets, and historical data.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-muted" id="features">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform offers everything you need for professional cricket scoring and analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="mb-2 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for the big leagues?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Whether you're scoring village cricket or international matches, CricScore AI scales to your needs.
          </p>
          <button className="bg-accent text-accent-foreground hover:bg-accent/90 btn">
            See All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
