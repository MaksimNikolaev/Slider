import { FC } from 'react';
import { Header } from '../../components/header/header';
import { Slider } from '../../components/slider/slider';
import { photosBackground } from '../../utils/photos';
import style from './background-style.module.css';
import { TPage } from '../../utils/types';
import { PhotoContainer } from '../../components/photoContainer/photoContainer';

export const Background: FC<TPage> = ({ sliderPhoto, setSliderPhoto }) => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Slider sliderPhoto={sliderPhoto} setSliderPhoto={setSliderPhoto}/>
        <PhotoContainer photos={photosBackground} setSliderPhoto={setSliderPhoto}/>
      </main>
    </>
  );
};
