import { Service, Testimonial, ContactInfo, Barber, TimeSlot } from "./types";

export const services: Service[] = [
  {
    id: "1",
    name: "Classic Haircut",
    description: "Traditional barbershop cut with precision and style",
    price: "$35",
    duration: "45 min",
    icon: "Scissors",
    popular: true,
  },
  {
    id: "2",
    name: "Beard Trim & Shape",
    description: "Professional beard grooming and styling",
    price: "$25",
    duration: "30 min",
    icon: "Zap",
  },
  {
    id: "3",
    name: "Hot Towel Shave",
    description: "Luxurious traditional straight razor shave",
    price: "$45",
    duration: "60 min",
    icon: "Flame",
  },
  {
    id: "4",
    name: "Hair Wash & Style",
    description: "Complete wash, condition, and styling service",
    price: "$30",
    duration: "40 min",
    icon: "Droplets",
  },
  {
    id: "5",
    name: "Mustache Grooming",
    description: "Precision mustache trimming and styling",
    price: "$15",
    duration: "20 min",
    icon: "Smile",
  },
  {
    id: "6",
    name: "Full Service Package",
    description: "Haircut, beard trim, and hot towel shave combo",
    price: "$85",
    duration: "90 min",
    icon: "Crown",
    popular: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Johnson",
    rating: 5,
    comment:
      "Best barbershop in town! The attention to detail is incredible and the atmosphere is perfect. Been coming here for 2 years now.",
    service: "Classic Haircut",
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "David Rodriguez",
    rating: 5,
    comment:
      "Amazing hot towel shave experience. Felt like royalty! The barbers really know their craft.",
    service: "Hot Towel Shave",
    date: "2024-01-10",
  },
  {
    id: "3",
    name: "James Wilson",
    rating: 5,
    comment:
      "Professional service every time. My beard has never looked better. Highly recommend the full service package.",
    service: "Full Service Package",
    date: "2024-01-08",
  },
  {
    id: "4",
    name: "Michael Brown",
    rating: 5,
    comment:
      "Clean, professional environment with skilled barbers. Great conversation and even better haircuts!",
    service: "Classic Haircut",
    date: "2024-01-05",
  },
  {
    id: "5",
    name: "Robert Davis",
    rating: 5,
    comment:
      "The team at FreshCutz knows how to make you look and feel your best. Worth every penny.",
    service: "Beard Trim & Shape",
    date: "2024-01-03",
  },
  {
    id: "6",
    name: "Christopher Lee",
    rating: 5,
    comment:
      "Exceptional service and attention to detail. The hot towel treatment is a game changer!",
    service: "Hot Towel Shave",
    date: "2024-01-01",
  },
];

export const contactInfo: ContactInfo = {
  phone: "(555) 123-CUTZ",
  email: "info@freshcutzbarbershop.com",
  address: {
    street: "123 Main Street",
    city: "Downtown",
    state: "CA",
    zipCode: "90210",
  },
  hours: {
    Monday: "9:00 AM - 7:00 PM",
    Tuesday: "9:00 AM - 7:00 PM",
    Wednesday: "9:00 AM - 7:00 PM",
    Thursday: "9:00 AM - 8:00 PM",
    Friday: "9:00 AM - 8:00 PM",
    Saturday: "8:00 AM - 6:00 PM",
    Sunday: "10:00 AM - 5:00 PM",
  },
  socialMedia: {
    instagram: "@freshcutzbarbershop",
    facebook: "FreshCutz Barbershop",
    twitter: "@freshcutzbarber",
  },
};
export const barbers: Barber[] = [
  {
    id: "1",
    name: "Marcus Thompson",
    specialties: ["Classic Cuts", "Beard Styling", "Hot Towel Shaves"],
    experience: "12 years",
    available: true,
  },
  {
    id: "2",
    name: "Diego Martinez",
    specialties: ["Modern Styles", "Fade Cuts", "Hair Washing"],
    experience: "8 years",
    available: true,
  },
  {
    id: "3",
    name: "James Wilson",
    specialties: ["Traditional Cuts", "Mustache Grooming", "Full Service"],
    experience: "15 years",
    available: true,
  },
  {
    id: "4",
    name: "Anthony Davis",
    specialties: ["Creative Styles", "Beard Trims", "Consultations"],
    experience: "6 years",
    available: false, // Currently unavailable
  },
];

export const timeSlots: TimeSlot[] = [
  { id: "1", time: "9:00 AM", available: true },
  { id: "2", time: "9:30 AM", available: true },
  { id: "3", time: "10:00 AM", available: false },
  { id: "4", time: "10:30 AM", available: true },
  { id: "5", time: "11:00 AM", available: true },
  { id: "6", time: "11:30 AM", available: true },
  { id: "7", time: "12:00 PM", available: false },
  { id: "8", time: "12:30 PM", available: true },
  { id: "9", time: "1:00 PM", available: true },
  { id: "10", time: "1:30 PM", available: true },
  { id: "11", time: "2:00 PM", available: true },
  { id: "12", time: "2:30 PM", available: false },
  { id: "13", time: "3:00 PM", available: true },
  { id: "14", time: "3:30 PM", available: true },
  { id: "15", time: "4:00 PM", available: true },
  { id: "16", time: "4:30 PM", available: true },
  { id: "17", time: "5:00 PM", available: true },
  { id: "18", time: "5:30 PM", available: false },
  { id: "19", time: "6:00 PM", available: true },
  { id: "20", time: "6:30 PM", available: true },
];
