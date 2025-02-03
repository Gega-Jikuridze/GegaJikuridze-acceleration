// Photo   component for map all cards for HomePage

import React, { useState } from "react";
import ViewModal from "../modal/ViewModal";
import { PhotoCardProps } from "../../interfaces/propsInterface";
import { usePhotoById } from "../../queries/usePhotoById";

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const { photoData } = usePhotoById(id);

  const onCardClick = async (id: string) => {
    setSelectedPhoto(true);
    setId(id);
  };

  return (
    <>
      <div className="card" onClick={() => onCardClick(photo.id)}>
        <h1>{photo.alt_description}</h1>
        <img src={photo?.urls.regular} alt="Product" />
      </div>
      {selectedPhoto && photoData && (
        <ViewModal photo={photoData} onClose={() => setSelectedPhoto(false)} />
      )}
    </>
  );
};

export default PhotoCard;
