import { FC } from 'react';
import { TPhotoComponent } from '../../utils/types';
import style from './photo-style.module.css';

export const Photo: FC<TPhotoComponent> = ({ photos, setSliderPhoto }) => {

  const handlePhotoClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const clickedPhotoSrc = e.currentTarget.currentSrc;
    setSliderPhoto((prevPhotos: string[]) => prevPhotos.includes(clickedPhotoSrc) ? prevPhotos : [...prevPhotos, clickedPhotoSrc])
  };

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {    
    const draggedPhotoSrc = e.currentTarget.currentSrc;
    e.dataTransfer.setData('text/plain', draggedPhotoSrc);
  };

  return (
    <div className={style.container}>
      {photos.map((photo) => (
        <img 
          onDragStart={handleDragStart}
          draggable={true}         
          onClick={handlePhotoClick}
          className={style.img}
          key={photo.id}
          src={photo.url}
          alt={photo.desc}  
        />
      ))}
    </div>
  );
};
