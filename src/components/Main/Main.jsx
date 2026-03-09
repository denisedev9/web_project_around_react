import { useState } from "react";
import imagetrash from '../../images/trash.svg'
import yosemite from '../../images/yosemite.png'
import profileImage from '../../images/profile__img.jpg'
import pencil from '../../images/pencil.svg'
import plus from '../../images/plus.svg'
import Popup from "./Popup/Popup";
import NewCard from "../NewCard/NewCard";
import Card from "../Card/Card";
import EditAvatar from "../EditAvatar/EditAvatar.jsx"
import EditProfile from "../EditProfile/EditProfile.jsx"

function Main() {
  const [popup, setPopup] = useState(null);
    const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile onUpdateProfile={handleUpdateProfile} />,
  };

  const editAvatarPopup = {
    title: "Cambiar Foto de Perfil",
    children: <EditAvatar onUpdateAvatar={handleUpdateAvatar} />,
  };
 const newCardPopup = { 
  title: "Nuevo lugar", 
  children: <NewCard onAddCard={handleAddCard} />
};
    
 const [cards, setCards] = useState([
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  }, 
]);

const [profileName, setProfileName] = useState("Jacques Cousteau");
const [profileAbout, setProfileAbout] = useState("Explorador");
const [avatar, setAvatar] = useState(profileImage);

console.log(cards);


   function handleOpenPopup(popup) {
  setPopup(popup);

    
  }
  function handleClosePopup() {
    setPopup(null);
  }

  function handleUpdateProfile(name, about) {
  setProfileName(name);
  setProfileAbout(about);
  handleClosePopup();
}

function handleUpdateAvatar(link) {
  setAvatar(link);
  handleClosePopup();
}

function handleAddCard(name, link) {
  const newCard = {
    _id: Date.now(),
    name: name,
    link: link,
    isLiked: false
  };

  setCards((prevCards) => [newCard, ...prevCards]);
  handleClosePopup();
}

function handleDeleteCard(cardId) {
  setCards((prevCards) => prevCards.filter((card) => card._id !== cardId));
}

    return (  
<main className="main">
  <section className="profile">
    <div className="profile__image_edit"  
        onClick={() => handleOpenPopup(editAvatarPopup)} >
      <img className="profile__image"
      src={avatar}
      alt="profile"/>  </div>
    <div className="profile__border-box">
      <div className="profile__container">
       <h1 className="profile__name">{profileName}</h1>
          <button
        className="edit__button"
        onClick={() => handleOpenPopup(editProfilePopup)}
        >
    <img src={pencil} alt="edit" />
  </button>

      </div> <p className="profile__about">{profileAbout}</p>
    </div>

     <button
        aria-label="Add card"
        className="profile__add-button"
        type="button"
        onClick={() => handleOpenPopup(newCardPopup)} 
      >  <img src={plus} alt="add" />
      </button>
  </section>  

 <ul className="cards__list">
  {cards.map((card) => (
    <Card key={card._id} card={card} 
     handleOpenPopup={handleOpenPopup} 
    handleClosePopup={handleClosePopup}
    onDeleteCard={handleDeleteCard}
    />
  ))}
</ul>
{popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
      
</main>
    );
}

export default Main;
