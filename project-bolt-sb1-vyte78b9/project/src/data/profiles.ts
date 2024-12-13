import { Profile } from '../types/Profile';

export const profiles: Profile[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    description: "Full-stack developer with expertise in React and Node.js. Passionate about creating scalable web applications.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop",
    location: {
      address: "123 Tech Avenue, San Francisco, CA",
      coordinates: [-122.4194, 37.7749]
    },
    contact: {
      email: "sarah.j@example.com",
      phone: "(555) 123-4567"
    },
    interests: ["Coding", "Hiking", "Photography"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "UX Designer",
    description: "Creative designer focused on user-centered design principles and creating delightful user experiences.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
    location: {
      address: "456 Design Street, New York, NY",
      coordinates: [-73.9857, 40.7484]
    },
    contact: {
      email: "michael.c@example.com",
      phone: "(555) 234-5678"
    },
    interests: ["Design", "Art", "Travel"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    description: "Strategic product leader with experience in launching successful tech products and leading cross-functional teams.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&fit=crop",
    location: {
      address: "789 Product Lane, Seattle, WA",
      coordinates: [-122.3321, 47.6062]
    },
    contact: {
      email: "emily.r@example.com",
      phone: "(555) 345-6789"
    },
    interests: ["Product Strategy", "Yoga", "Reading"]
  },
  {
    id: 4,
    name: "David Kim",
    role: "Data Scientist",
    description: "Data expert specializing in machine learning and AI applications. Passionate about solving complex problems.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&fit=crop",
    location: {
      address: "321 Data Drive, Boston, MA",
      coordinates: [-71.0589, 42.3601]
    },
    contact: {
      email: "david.k@example.com",
      phone: "(555) 456-7890"
    },
    interests: ["AI", "Chess", "Music"]
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Director",
    description: "Strategic marketing professional with expertise in digital marketing and brand development.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop",
    location: {
      address: "654 Marketing Blvd, Austin, TX",
      coordinates: [-97.7431, 30.2672]
    },
    contact: {
      email: "lisa.t@example.com",
      phone: "(555) 567-8901"
    },
    interests: ["Marketing", "Cooking", "Fitness"]
  }
];