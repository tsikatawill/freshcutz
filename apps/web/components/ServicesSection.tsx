import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";
import { Scissors, Zap, Flame, Droplets, Smile, Crown } from "lucide-react";

const iconMap = {
  Scissors,
  Zap,
  Flame,
  Droplets,
  Smile,
  Crown,
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 barbershop-text-gradient">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the finest in men's grooming with our comprehensive range
            of professional barbering services, crafted to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <Card
                key={service.id}
                className="relative group hover:shadow-lg transition-all duration-300 masculine-shadow border-border/50 hover:border-primary/20"
              >
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 barbershop-accent text-primary-foreground">
                    Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary text-2xl">
                      {service.price}
                    </span>
                    <span>•</span>
                    <span>{service.duration}</span>
                  </div>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Can't decide? Our expert barbers will help you choose the perfect
            service.
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-medium">
            <Scissors className="w-4 h-4" />
            <span>Call (555) 123-CUTZ for personalized recommendations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
