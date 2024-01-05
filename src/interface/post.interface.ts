export interface Post {
  id: number;
  userId: number;
  imageLarge: string;
  imageSmall: string;
  title: string;
  readingTime: string;
  createdAt: string;
  updatedAt: string | null;
  description: string;
  category: string;
  content: string[];
}
