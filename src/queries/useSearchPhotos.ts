import { useQuery } from "@tanstack/react-query";
import { API_KEY, BASE_URL } from "../config";

const fetchData = async (page: string, query: string | null) => {
  try {
    const res = await fetch(
      `${BASE_URL}search/photos?page=${page}&per_page=20&query=${query}&client_id=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Response Failed");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const useSearchPhotos = (page: string, query: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["searchData", query],
    queryFn: () => fetchData(page, query),
    retry: false,
    enabled: !!query,
  });

  return { searchProducts: data, searchLoader: isLoading, error };
};
