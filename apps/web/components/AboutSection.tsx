import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Award, Users, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 barbershop-accent text-primary-foreground">
                About FreshCutz
              </Badge>
              <h2 className="mb-6 barbershop-text-gradient">
                Crafting Excellence Since 2009
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At FreshCutz Barbershop, we believe that a great haircut is more
                than just a service—it's an art form. Our master barbers combine
                traditional techniques with modern styling to deliver
                exceptional results that boost your confidence and reflect your
                personal style.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of downtown, we've been the go-to
                destination for discerning gentlemen who appreciate quality
                craftsmanship, attention to detail, and a premium grooming
                experience in a relaxed, professional atmosphere.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">
                  5000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Satisfied Clients
                </div>
              </div>
            </div>
          </div>

          {/* Features Column */}
          <div className="space-y-6">
            <Card className="masculine-shadow border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Master Barbers
                    </h3>
                    <p className="text-muted-foreground">
                      Our team consists of licensed professionals with decades
                      of combined experience in traditional and modern barbering
                      techniques.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="masculine-shadow border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Scissors className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Premium Tools
                    </h3>
                    <p className="text-muted-foreground">
                      We use only the finest professional-grade tools and
                      premium grooming products to ensure exceptional results
                      every time.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="masculine-shadow border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Personalized Service
                    </h3>
                    <p className="text-muted-foreground">
                      Every client receives individual attention and customized
                      service tailored to their unique style preferences and
                      lifestyle needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="masculine-shadow border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Convenient Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Open 7 days a week with extended evening hours to
                      accommodate your busy schedule. Walk-ins welcome,
                      appointments preferred.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
