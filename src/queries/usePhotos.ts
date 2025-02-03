import { useQuery } from "@tanstack/react-query";
import { API_KEY, BASE_URL } from "../config";
import { Photo } from "../interfaces/interface";

const getPhotos = async (page: string): Promise<Photo[]> => {
  const res = await fetch(
    `${BASE_URL}photos?page=${page}&per_page=20&order_by=popular&client_id=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch photos");
  }

  return res.json();
};

export const usePhotos = (page: string) => {
  const { data, error, isLoading } = useQuery<Photo[]>({
    queryKey: ["searchData", page],
    queryFn: () => getPhotos(page),
    retry: false,
  });

  return { fetchedData: data, error, isLoading };
};
