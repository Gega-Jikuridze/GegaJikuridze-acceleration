// HomePage where are all fetched and searched photos

import React, { useEffect, useState } from "react";
import { usePhotos } from "../queries/usePhotos";
import { Photo } from "../interfaces/interface";
import SearchBar from "../components/search/SearchBar";
import PhotoCard from "../components/card/PhotoCard";
import { Loading, MainPageStyle } from "../assets/styles/Pages";
import useLocalStorage from "../hooks/useLocalStorage";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const HomePage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchedPhotos, setSearchedPhotos] = useState<Photo[]>([]);
  const [value, setValue] = useLocalStorage<string[]>("ValueKeys", []);

  // for searching photos with useInfiniteScroll hook
  const { isloading, page, query, setQuery, searchProducts } =
    useInfiniteScroll();

  // for fetching photos with useFetch hook
  const { fetchedData, error, isLoading } = usePhotos(page.toString());

  const handleSearch = (query: string) => {
    setQuery(query);
    if (query == "" || value.includes(query)) {
      setValue([...value]);
    } else {
      setValue([...value, query]);
    }

    setSearchedPhotos([]);
  };

  // filtering searched and fetched photos
  useEffect(() => {
    if (fetchedData) {
      setPhotos((prev) => {
        const uniqueNewData = fetchedData.filter(
          (newPhoto: Photo) =>
            !prev.some((prevPhoto) => prevPhoto.id === newPhoto.id)
        );

        return [...prev, ...uniqueNewData];
      });
    }

    if (searchProducts && searchProducts.results) {
      setSearchedPhotos((prev) => {
        const searchedData: Photo[] =
          searchProducts.results?.filter(
            (newSearch: Photo) =>
              !prev.some((prevSearch) => prevSearch.id === newSearch.id)
          ) || [];

        return [...prev, ...searchedData];
      });
    }
  }, [fetchedData, searchProducts]);

  const researchPhotos = query ? searchedPhotos : photos;

  if (error) return null;
  if (isLoading && photos.length === 0) return <Loading>Loading...</Loading>;

  // rendering all fetched and searched photos
  return (
    <div>
      <SearchBar handleChange={handleSearch} />
      <MainPageStyle>
        {researchPhotos?.map((photo: Photo, index) => (
          <div key={index}>
            <PhotoCard photo={photo} />
          </div>
        ))}
        {isloading && <Loading>Loading...</Loading>}
      </MainPageStyle>
    </div>
  );
};

export default HomePage;
