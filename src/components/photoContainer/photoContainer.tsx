import { FC, useState } from 'react';
import { Menu } from '../menu/menu';
import style from './photoContainer-style.module.css';
import { Photo } from '../photo/photo';
import { TPhotoContainer } from '../../utils/types';

export const PhotoContainer: FC<TPhotoContainer> = ({
  photos,
  setSliderPhoto,
}) => {
  const [isFull, setFull] = useState(false)

  return (
    <div className={isFull ? style.wrapper : undefined}>
      <Menu />
      <div className={style.container}>
        <div>
          <button onClick={() => setSliderPhoto([])} className={style.btn}>
            <svg
              className={style.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="10px"
              height="10px"
              viewBox="0 0 122.878 122.88"
            >
              <g>
                <path
                  fill="#3b3b3b"
                  d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"
                />
              </g>
            </svg>
            Очистить
          </button>
          <button className={style.btn}>
            <svg
              className={style.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="12px"
              height="12px"
              viewBox="0 0 122.878 122.88"
            >
              <g fill="none" stroke="#000">
                <path d="M2 17.274h108.359M71.133 138H41.226a18.719 18.719 0 0 1-18.511-15.548L8.593 38.371h95.173l-14.122 84.081A18.72 18.72 0 0 1 71.133 138zM40.773 17.274a15.407 15.407 0 0 1 30.813 0M36.208 54.518l5.08 61.079M56.179 54.518v61.079M76.15 54.518l-5.079 61.079" />
              </g>
            </svg>
            Выбрать
          </button>
        </div>
        <button onClick={() => setFull(!isFull)} className={style.full_btn}>
          <svg
            className={style.icon}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="14px"
            viewBox="0 0 128 128"
          >
            <g id="_x32_6_1_">
              <path
                d="M120.4 115.1 74.7 69.3l-5.3 5.3 45.7 45.8H86.6v7.5h41.3V86.6h-7.5v28.5zM45.3 7.5V0H.2v41.4h7.5V12.9l45.7 45.8 5.3-5.3L13 7.5h32.3zm8.1 61.8L7.7 115.1V86.6H.2V128h45.1v-7.5H13l45.7-45.8-5.3-5.4zm67-69.3H86.6l-.1 7.6h28.6L69.4 53.4l5.3 5.3 45.7-45.8v28.6h7.5V0h-7.5z"
                id="icon_78_"
              />
            </g>
          </svg>
          {isFull ? 'Свернуть' : 'Развернуть'}
        </button>
      </div>
      <Photo photos={photos} setSliderPhoto={setSliderPhoto} />
    </div>
  );
};
