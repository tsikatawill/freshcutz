import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-primary fill-primary" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 barbershop-accent text-primary-foreground">
            Client Reviews
          </Badge>
          <h2 className="mb-4 barbershop-text-gradient">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their FreshCutz experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative masculine-shadow border-border/50 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>

                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.comment}"
                </blockquote>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      {testimonial.service && (
                        <div className="text-sm text-muted-foreground">
                          {testimonial.service}
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(testimonial.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
            <div className="flex items-center gap-1">{renderStars(5)}</div>
            <span className="text-2xl font-bold">4.9/5</span>
          </div>
          <p className="text-muted-foreground">
            Based on 200+ verified reviews from satisfied clients
          </p>
        </div>
      </div>
    </section>
  );
}
