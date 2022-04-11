import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function closeAllPopups() {
    setSelectedCard({});
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
          buttonText="Сохранить"
        >
          <div className="popup__input-container">
            <input
              id="name-input"
              type="text"
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Имя пользователя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error name-input-error"></span>
          </div>
          <div className="popup__input-container">
            <input
              id="description-input"
              type="text"
              className=" popup__input popup__input_type_description"
              name="about"
              placeholder="Описание пользователя"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error description-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <div className="popup__input-container">
            <input
              id="avatar-input"
              type="url"
              className="popup__input popup__input_type_avatar"
              name="avatar"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="popup__input-error avatar-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="add"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
        >
          <div className="popup__input-container">
            <input
              id="place-input"
              type="text"
              className="popup__input popup__input_type_place"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error place-input-error"></span>
          </div>
          <div className="popup__input-container">
            <input
              id="url-input"
              type="url"
              className="popup__input popup__input_type_url"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error url-input-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title="Вы уверены?"
          name="delete"
          onClose={closeAllPopups}
          buttonText="Да"
        />

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
}

export default App;
