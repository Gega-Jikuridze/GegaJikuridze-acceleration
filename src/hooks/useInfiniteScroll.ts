// useSearch hook for fetch and cache searched values from the database with useQuery

import { useEffect, useState } from "react";
import { useSearchPhotos } from "../queries/useSearchPhotos";

const useInfiniteScroll = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState(1);
  const [isloading, setIsLoading] = useState(false);

  const { searchProducts } = useSearchPhotos(page.toString(), query);

  // Infinity Scroll Function
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setIsLoading(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { query, setQuery, page, searchProducts, isloading };
};

export default useInfiniteScroll;
