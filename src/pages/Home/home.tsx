import { FC } from 'react';
import { Header } from '../../components/header/header';
import { Slider } from '../../components/slider/slider';
import style from './home-style.module.css';
import { TPage } from '../../utils/types';
import { photosGalery } from '../../utils/photos';
import { PhotoContainer } from '../../components/photoContainer/photoContainer';

export const Home: FC<TPage> = ({ sliderPhoto, setSliderPhoto }) => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Slider sliderPhoto={sliderPhoto} setSliderPhoto={setSliderPhoto}/>
        <PhotoContainer photos={photosGalery} setSliderPhoto={setSliderPhoto}/>      
      </main>
    </>
  );
};
