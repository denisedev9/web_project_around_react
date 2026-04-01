import { useEffect } from "react";
import imagex from "../../../images/x.svg";

export default function Popup(props) {
  const { onClose, title, children } = props;
  const contentClass = `popup__content ${!title ? 'popup__content_type_image' : ''}`;

  useEffect(() => {
    function handleEscClose(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  }, [onClose]);

  return (
    <div className="popup">
      {/* ✅ NUEVO: wrapper que contiene tanto la X como el contenido */}
      <div className="popup__wrapper">
        <button
          aria-label="Close modal"
          className="popup__close"
          type="button"
          onClick={onClose}
        >
          <img src={imagex} alt="close" />
        </button>
        <div className={contentClass}>
          <h3 className="popup__title">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}