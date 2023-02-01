import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

// saves animals that have been seen to cache
export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  /**
   * ? `results?` - results is conditional and shouldn't return an error,
   * ? ?? [] - return empty list if no results?.data.breads
   * * this is es2021
   */
  return [results?.data?.breeds ?? [], results.status];
}
