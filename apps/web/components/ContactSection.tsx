"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { contactInfo, barbers, services, timeSlots } from "@/lib/data";
import { BookingFormData } from "@/lib/types";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Calendar,
  User,
  Scissors,
  CheckCircle,
} from "lucide-react";

export default function ContactSection() {
  const [bookingData, setBookingData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    barberId: "",
    serviceId: "",
    date: "",
    timeSlotId: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get selected details for confirmation
    const selectedBarber = barbers.find((b) => b.id === bookingData.barberId);
    const selectedService = services.find(
      (s) => s.id === bookingData.serviceId
    );
    const selectedTimeSlot = timeSlots.find(
      (t) => t.id === bookingData.timeSlotId
    );

    console.log("Booking submitted:", {
      ...bookingData,
      barber: selectedBarber?.name,
      service: selectedService?.name,
      timeSlot: selectedTimeSlot?.time,
    });

    alert(
      `Booking confirmed!\n\nBarber: ${selectedBarber?.name}\nService: ${selectedService?.name}\nDate: ${bookingData.date}\nTime: ${selectedTimeSlot?.time}\n\nWe'll send you a confirmation email shortly.`
    );

    // Reset form
    setBookingData({
      name: "",
      email: "",
      phone: "",
      barberId: "",
      serviceId: "",
      date: "",
      timeSlotId: "",
      notes: "",
    });
  };

  const selectedBarber = barbers.find((b) => b.id === bookingData.barberId);
  const selectedService = services.find((s) => s.id === bookingData.serviceId);
  const availableTimeSlots = timeSlots.filter((slot) => slot.available);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 barbershop-accent text-primary-foreground">
            Book Your Appointment
          </Badge>
          <h2 className="mb-4 barbershop-text-gradient">
            Choose Your Barber & Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your preferred barber, service, and time slot for the perfect
            grooming experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <Card className="masculine-shadow border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Book Your Appointment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Your Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={bookingData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <Separator />

                {/* Barber Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Scissors className="w-5 h-5 text-primary" />
                    Choose Your Barber
                  </h3>

                  <div className="grid grid-cols-1 gap-3">
                    {barbers
                      .filter((barber) => barber.available)
                      .map((barber) => (
                        <label
                          key={barber.id}
                          className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all hover:border-primary/50 ${
                            bookingData.barberId === barber.id
                              ? "border-primary bg-primary/5"
                              : "border-border"
                          }`}
                        >
                          <input
                            type="radio"
                            name="barberId"
                            value={barber.id}
                            checked={bookingData.barberId === barber.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="flex-1">
                            <div className="font-semibold">{barber.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {barber.experience} experience •{" "}
                              {barber.specialties.join(", ")}
                            </div>
                          </div>
                          {bookingData.barberId === barber.id && (
                            <CheckCircle className="w-5 h-5 text-primary" />
                          )}
                        </label>
                      ))}
                  </div>
                </div>

                <Separator />

                {/* Service Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Select Service</h3>

                  <select
                    name="serviceId"
                    value={bookingData.serviceId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.price} ({service.duration})
                      </option>
                    ))}
                  </select>

                  {selectedService && (
                    <div className="p-3 bg-primary/5 border border-primary/20 rounded-md">
                      <div className="font-medium">{selectedService.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedService.description}
                      </div>
                      <div className="text-sm font-medium text-primary mt-1">
                        {selectedService.price} • {selectedService.duration}
                      </div>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Date & Time Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Date & Time</h3>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium mb-2"
                    >
                      Preferred Date *
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Available Time Slots *
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {availableTimeSlots.map((slot) => (
                        <label
                          key={slot.id}
                          className={`flex items-center justify-center p-2 border rounded cursor-pointer transition-all hover:border-primary/50 text-sm ${
                            bookingData.timeSlotId === slot.id
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border"
                          }`}
                        >
                          <input
                            type="radio"
                            name="timeSlotId"
                            value={slot.id}
                            checked={bookingData.timeSlotId === slot.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          {slot.time}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Additional Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium mb-2"
                  >
                    Special Requests or Notes
                  </label>
                  <Textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={bookingData.notes}
                    onChange={handleInputChange}
                    placeholder="Any specific style preferences, concerns, or special requests..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full barbershop-accent text-primary-foreground hover:opacity-90 masculine-shadow"
                  size="lg"
                  disabled={
                    !bookingData.name ||
                    !bookingData.email ||
                    !bookingData.phone ||
                    !bookingData.barberId ||
                    !bookingData.serviceId ||
                    !bookingData.date ||
                    !bookingData.timeSlotId
                  }
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="masculine-shadow border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Visit Our Shop</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-muted-foreground">
                      {contactInfo.address.street}
                      <br />
                      {contactInfo.address.city}, {contactInfo.address.state}{" "}
                      {contactInfo.address.zipCode}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">
                      {contactInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">
                      {contactInfo.email}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="masculine-shadow border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(contactInfo.hours).map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium">{day}</span>
                      <span className="text-muted-foreground">{hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="masculine-shadow border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Instagram: {contactInfo.socialMedia.instagram}</div>
                  <div>Facebook: {contactInfo.socialMedia.facebook}</div>
                  <div>Twitter: {contactInfo.socialMedia.twitter}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
