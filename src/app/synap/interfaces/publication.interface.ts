import { CategorySlug } from "../types/categories.type";

export interface Publication {
  id: number;
  title: string;
  summary: string;
  category:CategorySlug;
  date: string;
  readTime: string;
  image: string;
  author: string;
}
