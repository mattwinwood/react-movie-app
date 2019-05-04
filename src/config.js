import {generateRandomID, getRandomElementsInArray} from "./js/utils";
import {SEED_DATA} from "./seedData";

export const CONFIG_SEED_COLLECTIONS = [
    {id: generateRandomID(), name: "Matt's Collection", movies: getRandomElementsInArray(SEED_DATA, 30)},
    {id: generateRandomID(), name: "Chachi's Collection", movies: getRandomElementsInArray(SEED_DATA, 15)},
    {id: generateRandomID(), name: "Raleigh's Collection", movies: getRandomElementsInArray(SEED_DATA, 18)},
    {id: generateRandomID(), name: "John's Collection", movies: getRandomElementsInArray(SEED_DATA, 22)}
]

export const CONFIG_API_KEY = "d300907e";
export const CONFIG_HERO_IMAGE_URL = "https://occ-0-444-448.1.nflxso.net/art/b75d4/447304d6f910fc4824dac18015bb34c45dcb75d4.webp";
export const CONFIG_LOGO_IMAGE_URL = "http://mattwinwood.com/arcadia/logo.png";
export const CONFIG_DEFAULT_SEARCH_TERM = "avengers";




