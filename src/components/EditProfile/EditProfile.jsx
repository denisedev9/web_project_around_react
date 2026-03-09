import { useState } from "react";
export default function EditProfile({ onUpdateProfile }){
 
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  
  function handleSubmit(e) {
  e.preventDefault();
  onUpdateProfile(name, about);
}
  
  return (
    <form
      className="popup__form"
      name="profile-form"
      id="profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_name"
          id="profile-name"
          maxLength="40"
          minLength="2"
          name="name"
          placeholder="Name"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__error" id="profile-name-error"></span>
      </label>

      <label className="popup__field">
        <input
          className="popup__input popup__input_type_about"
          id="profile-about"
          maxLength="200"
          minLength="2"
          name="about"
          placeholder="About me"
          required
          type="text"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <span className="popup__error" id="profile-about-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}