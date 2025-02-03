import { useQuery } from "@tanstack/react-query";
import { API_KEY, BASE_URL } from "../config";
import { Photo } from "../interfaces/interface";

const getPhotoById = async (id: string): Promise<Photo> => {
  const res = await fetch(`${BASE_URL}photos/${id}?client_id=${API_KEY}`);

  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  return res.json();
};

export const usePhotoById = (id: string) => {
  const { data, error, isLoading } = useQuery<Photo>({
    queryKey: ["photoById", id],
    queryFn: () => getPhotoById(id),
    enabled: !!id,
  });

  return { photoData: data, error, isLoading };
};
