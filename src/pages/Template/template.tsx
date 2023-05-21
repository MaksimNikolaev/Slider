import style from './template-style.module.css';
import { Header } from '../../components/header/header';
import { Slider } from '../../components/slider/slider';
import { photosTemplate } from '../../utils/photos';
import { FC } from 'react';
import { TPage } from '../../utils/types';
import { PhotoContainer } from '../../components/photoContainer/photoContainer';

export const Template: FC<TPage> = ({ sliderPhoto, setSliderPhoto }) => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Slider sliderPhoto={sliderPhoto} setSliderPhoto={setSliderPhoto}/>
        <PhotoContainer photos={photosTemplate} setSliderPhoto={setSliderPhoto}/>
      </main>
    </>
  );
};
