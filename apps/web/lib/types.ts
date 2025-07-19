export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service?: string;
  date: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  hours: {
    [key: string]: string;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredDate?: string;
  preferredTime?: string;
}

export interface Barber {
  id: string;
  name: string;
  specialties: string[];
  experience: string;
  image?: string;
  available: boolean;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  barberId: string;
  serviceId: string;
  date: string;
  timeSlotId: string;
  notes: string;
}
