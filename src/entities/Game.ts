import { Platform } from "@/entities/Platform";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";


export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  rating: number;
  parent_platforms: { platform: Platform; }[]; // an object array of type platform
  metacritic: number;
  slug: string;
  description_raw: string;
}
