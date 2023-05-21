import { FC, useState } from 'react';
import style from './slider-style.module.css';
import { TPage } from '../../utils/types';
import { Modal } from '../modal/modal';

export const Slider: FC<TPage> = ({
  sliderPhoto,
  setSliderPhoto,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [urlImage, setUrlImage] = useState<string>('');
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = (e: React.MouseEvent<HTMLImageElement>) => {
    setOpenModal(true);
    const imageElement = e.target as HTMLImageElement;
    setUrlImage(imageElement.currentSrc);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderPhoto.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderPhoto.length) % sliderPhoto.length
    );
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const updatedPhotos = [...sliderPhoto];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        updatedPhotos.push(reader.result as string);
        setSliderPhoto(updatedPhotos);
      };
      reader.readAsDataURL(file);
    });

    const draggedPhotoSrc = event.dataTransfer.getData('text/plain');
    setSliderPhoto((prevPhotos: string[]) =>
      prevPhotos.includes(draggedPhotoSrc) ? prevPhotos : [...prevPhotos, draggedPhotoSrc]
    );
    setIsDraggingOver(false);
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(false);
  };

  if (sliderPhoto.length === 0) {
    return (
      <div
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`${style.container}  ${isDraggingOver ? style.dragging : ''}`}
      >
        Выберите фотографию или перетащите в эту область фотографию с компьютера, или нижние фото.
      </div>
    );
  }

  return (
    <>
      <div>
        {sliderPhoto.map((photo, i) => (
          <img
            className={style.miniPhoto}
            key={i}
            src={photo}
            alt="miniSlide"
          />
        ))}
      </div>
      <div
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`${style.slider_container} ${isDraggingOver ? style.dragging : ''}`}
      >
        <div className={style.slider}>
          <div
            className={style.slider_wrapper}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sliderPhoto
              .map((photo, i) => (
                <img
                  onClick={(e) => handleOpenModal(e)}
                  className={style.img}
                  key={i}
                  src={photo}
                  alt="slide"
                />
              ))
              .reverse()}
          </div>
        </div>
        <div className={style.switching}>
          <div className={style.btn} onClick={prevSlide} />
          <div>Страница {currentIndex + 1}</div>
          <div
            className={`${style.btn} ${style.btn_next}`}
            onClick={nextSlide}
          />
        </div>
      </div>
      <Modal width="1000px" isOpen={openModal} onClose={handleCloseModal}>
        <img className={style.img} src={urlImage} alt="photoFull"></img>
      </Modal>
    </>
  );
};
