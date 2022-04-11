function ImagePopup(props) {
    return (
      <div
        className={`popup popup_type_zoom ${props.card.link && "popup_opened"}`}
        id="popup_type_zoom"
      >
        <div className="popup__zoom-container">
          <button
            className="popup__close-button"
            type="button"
            title="Закрыть окно"
            aria-label="Закрыть"
            id="button_close_image"
            onClick={props.onClose}
          ></button>
          <figure className="popup__figure">
            <img
              className="popup__figure-image"
              src={props.card.link}
              alt={props.card.name}
            />
            <figcaption className="popup__figcaption">
              {props.card.name}
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
  
  export default ImagePopup;
  