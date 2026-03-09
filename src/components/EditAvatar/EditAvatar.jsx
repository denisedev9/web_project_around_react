import { useState } from "react";
export default function EditAvatar({ onUpdateAvatar }) {
  const [link, setLink] = useState("");

  function handleSubmit(e) {
  e.preventDefault();
  onUpdateAvatar(link);
}

  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_avatar"
          id="avatar-link"
          name="avatar"
          placeholder="Avatar link"
          required
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="popup__error" id="avatar-link-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}