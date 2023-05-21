import { FC, useEffect, useRef } from "react";
import { TModal } from "../../utils/types";
import style from './modal-style.module.css';

export const Modal: FC<TModal> = ({ isOpen, onClose, children, width }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return isOpen ? (
    <div className={style.modal}>
      <div style={{width: width}} ref={modalRef} className={style.modal_content}>
        <span className={style.close} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  ) : null;
};