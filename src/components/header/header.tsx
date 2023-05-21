import { useState } from 'react';
import style from './header-style.module.css';
import { Modal } from '../modal/modal';

export const Header = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <header className={style.header}>
      <div>
        <h1 className={style.title}>Мой проект</h1>
        <p className={style.desc}>Размер 400х280 мм (В развороте)</p>
      </div>
      <button onClick={() => setOpenModal(true)} className={style.cart}>В корзину</button>
      <Modal width='400px' isOpen={openModal} onClose={handleCloseModal}>
        <p>Продукт успешно добавлен в корзину</p>
        <button className={style.btn}>Перейти в корзину</button>
      </Modal>
    </header>
  )
}
