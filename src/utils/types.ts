export type TPhoto = {
  id: number;
  url: string;
  desc: string;
}

export type TPhotoComponent = {
  photos: TPhoto[];
  setSliderPhoto: React.Dispatch<React.SetStateAction<string[]>>; 
}

export type TPage = {
  sliderPhoto: string[];
  setSliderPhoto: React.Dispatch<React.SetStateAction<string[]>>; 
}

export type TModal = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width: string;
}