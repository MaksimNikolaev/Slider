export type TPhoto = {
  id: number;
  url: string;
  desc: string;
}

export type TPhotoComponent = {
  photos: TPhoto[];
  setSliderPhoto: any; 
}

export type TPage = {
  sliderPhoto: string[];
  setSliderPhoto: any; 
}

export type TSliderComponent = {
  sliderPhoto: string[]
  setSliderPhoto: any; 
}

export type TSettings = {
  setSliderPhoto: any;
}

export type TPhotoContainer = {
  photos: TPhoto[];
  setSliderPhoto: any; 
}

export type TModal = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width: string;
}