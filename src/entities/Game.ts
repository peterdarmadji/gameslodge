import { Platform } from "@/entities/Platform";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  parent_platforms: { platform: Platform; }[]; // an object array of type platform
  metacritic: number;
  slug: string;
  description_raw: string;
}
