export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  region: string;
  tags: string[];
}

export interface Package {
  id: string;
  title: string;
  destination: string;
  country: string;
  image: string;
  gallery: string[];
  price: number;
  duration: number;
  rating: number;
  reviews: number;
  highlights: string[];
  itinerary: DayItinerary[];
  inclusions: string[];
  exclusions: string[];
  description: string;
  category: string;
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  trip: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface BookingData {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  packageId: string;
  packageTitle: string;
  totalPrice: number;
  specialRequests?: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  sessionId?: string;
  createdAt?: string;
}
