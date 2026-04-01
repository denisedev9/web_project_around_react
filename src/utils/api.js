class Api {
  constructor(baseUrl, token) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}cards/`, {
      headers: {
        authorization: this.token
      }
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error, algo salió mal");
    });
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}users/me`, {
      headers: {
        authorization: this.token
      }
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error, algo salió mal");
    });
  }

  editUserInfo(userInfo) {
    return fetch(`${this.baseUrl}users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error, algo salió mal");
    });
  }

  createCard(cardInfo) {
    return fetch(`${this.baseUrl}cards/`, {
      method: "POST",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cardInfo)
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error, algo salió mal");
    });
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.token
      }
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error, algo salió mal");
    });
  }

  likeCard(cardId) {
    return fetch(`${this.baseUrl}cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this.token
      }
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error, algo salió mal");
    });
  }

  removeLikeCard(cardId) {
    return fetch(`${this.baseUrl}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this.token
      }
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error, algo salió mal");
    });
  }

  editUserAvatar(userAvatar) {
    return fetch(`${this.baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userAvatar)
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error, algo salió mal");
    });
  }
}

const api = new Api(
  "https://around-api.es.tripleten-services.com/v1/",
  "5768b5d1-dfc2-4a9f-8746-47869d6fb7f5"
);

export default api;