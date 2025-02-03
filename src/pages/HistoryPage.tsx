// HistoryPage where is the searched values with history of photos

import React, { useEffect, useState } from "react";
import { Photo } from "../interfaces/interface";
import { HistoryStyle, Loading, MainPageStyle } from "../assets/styles/Pages";
import PhotoCard from "../components/card/PhotoCard";
import useLocalStorage from "../hooks/useLocalStorage";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const HistoryPage: React.FC = () => {
  const [value] = useLocalStorage<string[]>("ValueKeys", []);
  const [searchedPhotos, setSearchedPhotos] = useState<Photo[]>([]);
  const [cache, setCache] = useState(false);
  const { isloading, searchProducts, setQuery } = useInfiniteScroll();

  const onClick = (val: string) => {
    setQuery(val);
    setCache(true);
    setSearchedPhotos([]);
  };

  useEffect(() => {
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
  }, [searchProducts]);

  // returning Searched values from search
  // if cache is true rendering photo details

  return (
    <div>
      <HistoryStyle>
        <select onChange={(e) => onClick(e.target.value)}>
          <option value="">Searched History</option>
          {value.map((searched, index) => (
            <option key={index} value={searched}>
              {searched}
            </option>
          ))}
        </select>
        <h1>Choose your searched Photos</h1>
      </HistoryStyle>
      {cache && (
        <div>
          <MainPageStyle>
            {searchedPhotos?.map((photo: Photo, index) => (
              <div key={index}>
                <PhotoCard photo={photo} />
              </div>
            ))}
            {isloading && <Loading>Loading...</Loading>}
          </MainPageStyle>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
