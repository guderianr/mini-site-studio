import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized solutions.",
    icon: "⚡"
  },
  {
    title: "Secure & Reliable",
    description: "Built with security in mind, ensuring your data is always protected.",
    icon: "🔒"
  },
  {
    title: "Easy to Use",
    description: "Intuitive design that makes complex tasks feel effortless.",
    icon: "🎯"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make us stand out from the competition.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;