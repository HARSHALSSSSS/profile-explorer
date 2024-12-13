export interface Profile {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  location: {
    address: string;
    coordinates: [number, number];
  };
  contact: {
    email: string;
    phone: string;
  };
  interests: string[];
}