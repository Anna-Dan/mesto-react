import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__card">
      <button
        type="button"
        className="elements__delete-button"
        title="Удалить"
        aria-label="Удалить карточку"
      ></button>
      <img
        className="elements__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="elements__info-container">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button
            className="elements__like-button"
            type="button"
            title="Нравится"
            aria-label="Поставить лайк"
          ></button>
          <p className="elements__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
