import APIClient from "./api-client";
import { Platform } from "./platform-service";

export interface Game {
  id: number
  name: string
  background_image: string
  rating: number
  parent_platforms: {platform: Platform}[] // an object array of type platform
  metacritic: number
}

export default new APIClient<Game>("/games", )