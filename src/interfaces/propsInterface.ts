import { ModalPhoto, Photo } from "./interface";

// interfaces for component props

export interface PhotoCardProps {
  photo: Photo;
}

export interface ViewModalProps {
  onClose: () => void;
  photo: Photo | ModalPhoto;
}

export interface SearchBarProps {
  handleChange: (query: string) => void;
}

export interface InfiniteScrollProps {
  items: (Photo | History)[];
}
