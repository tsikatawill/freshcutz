# Design Document - FreshCutz Landing Page

## Overview

The FreshCutz landing page will be a modern, responsive single-page application built with Next.js 15, React 19, and Tailwind CSS. The design focuses on creating a professional, masculine aesthetic that appeals to barbershop clientele while maintaining excellent user experience across all devices.

The page will follow a vertical scroll layout with distinct sections that tell the story of FreshCutz - from the initial brand impression through services, expertise, and finally conversion through contact/booking.

## Architecture

### Technology Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 with CSS variables and shadcn/ui design system
- **Icons**: Lucide React (configured with shadcn/ui)
- **Components**: shadcn/ui components (Button, Card, Input, Form, etc.) + custom barbershop-specific components
- **Utilities**: clsx and tailwind-merge via cn() utility function

### Page Structure

The landing page will be implemented as a single React component with the following section hierarchy:

```
HomePage
├── Header/Navigation (sticky)
├── HeroSection
├── ServicesSection
├── AboutSection
├── TestimonialsSection
├── ContactSection
└── Footer
```

### Design System

- **Color Palette**: Professional barbershop theme with dark/gold accents
  - Primary: Deep charcoal (#1a1a1a)
  - Secondary: Gold accent (#d4af37)
  - Background: Clean white (#ffffff)
  - Text: High contrast grays
- **Typography**: Modern, masculine font hierarchy
- **Spacing**: Consistent 8px grid system
- **Breakpoints**: Mobile-first responsive design

## Components and Interfaces

### Core Components

#### 1. HeroSection Component

```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage?: string;
}
```

- Full viewport height hero with background image/gradient
- Centered content with compelling headline
- Primary CTA button for booking/contact
- Subtle scroll indicator

#### 2. ServicesSection Component

```typescript
interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  priceRange?: string;
}

interface ServicesSectionProps {
  services: Service[];
}
```

- Grid layout showcasing 4-6 key services
- Service cards with icons, descriptions
- Hover effects and visual hierarchy

#### 3. AboutSection Component

```typescript
interface AboutSectionProps {
  title: string;
  description: string;
  highlights: string[];
  image?: string;
}
```

- Two-column layout (text + image)
- Bullet points highlighting expertise
- Professional imagery placeholder

#### 4. TestimonialsSection Component

```typescript
interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}
```

- Carousel or grid of customer testimonials
- Star ratings and authentic feedback
- Social proof indicators

#### 5. ContactSection Component

```typescript
interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string[];
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}
```

- Contact form with validation
- Business information display
- Map integration placeholder
- Multiple contact methods

### shadcn/ui Components to Install and Use

#### Required shadcn/ui Components

- **Button**: Primary CTA buttons, navigation actions
- **Card**: Service cards, testimonial cards, content sections
- **Input**: Contact form fields
- **Textarea**: Contact form message field
- **Form**: Contact form with validation
- **Badge**: Service pricing, featured indicators
- **Separator**: Section dividers
- **Avatar**: Testimonial customer photos (optional)

#### Custom Components Built with shadcn/ui

#### ServiceCard Component

```typescript
interface ServiceCardProps {
  service: Service;
  className?: string;
}
```

- Built using shadcn/ui Card component
- Includes Lucide icons and Badge for pricing
- Hover effects with shadcn/ui styling

#### TestimonialCard Component

```typescript
interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}
```

- Built using shadcn/ui Card component
- Star rating display with Lucide Star icons
- Optional Avatar component for customer photos

#### ContactForm Component

```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  className?: string;
}
```

- Built using shadcn/ui Form, Input, Textarea, and Button
- Real-time validation with error states
- Accessible form structure

## Data Models

### Service Model

```typescript
interface Service {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  priceRange?: string;
  duration?: string;
  featured?: boolean;
}
```

### Testimonial Model

```typescript
interface Testimonial {
  id: string;
  customerName: string;
  rating: number; // 1-5 stars
  comment: string;
  serviceReceived?: string;
  date?: string;
}
```

### Contact Information Model

```typescript
interface ContactInfo {
  businessName: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  hours: {
    [key: string]: string; // day: hours
  };
  socialMedia?: {
    instagram?: string;
    facebook?: string;
  };
}
```

## Error Handling

### Client-Side Error Boundaries

- Implement React Error Boundaries for each major section
- Graceful degradation for missing images or data
- Fallback UI components for failed loads

### Form Validation

- Real-time validation for contact form
- Clear error messages and success states
- Accessibility-compliant error handling

### Image Loading

- Lazy loading for performance
- Placeholder images while loading
- Alt text for accessibility

## Testing Strategy

### Unit Testing

- Component rendering tests for all major components
- Props validation and default behavior
- Accessibility testing with React Testing Library

### Integration Testing

- Form submission workflows
- Navigation and scroll behavior
- Responsive design breakpoints

### Visual Testing

- Screenshot testing for design consistency
- Cross-browser compatibility
- Mobile device testing

### Performance Testing

- Core Web Vitals optimization
- Image optimization and lazy loading
- Bundle size monitoring

## Implementation Approach

### Phase 1: Foundation

- Set up component structure and basic layout
- Implement responsive grid system
- Create base styling with Tailwind

### Phase 2: Content Sections

- Build individual section components
- Add mock data and content
- Implement basic interactions

### Phase 3: Polish & Optimization

- Add animations and micro-interactions
- Optimize images and performance
- Implement accessibility features

### Phase 4: Testing & Refinement

- Cross-browser testing
- Mobile optimization
- Performance auditing

## Accessibility Considerations

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG 2.1 AA)
- Focus management and visual indicators

## Performance Optimization

- Next.js Image component for optimized images
- Lazy loading for below-the-fold content
- CSS-in-JS optimization with Tailwind
- Minimal JavaScript bundle
- Preloading critical resources
