import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 barbershop-text-gradient">
            FreshCutz Barbershop
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Where tradition meets modern style. Experience the finest in men's
            grooming with our expert barbers and premium services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="barbershop-accent text-primary-foreground hover:opacity-90 masculine-shadow px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
            >
              Book Your Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
            >
              View Services
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">★★★★★</div>
              <div className="text-muted-foreground">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
