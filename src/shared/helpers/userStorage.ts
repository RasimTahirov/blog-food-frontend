const userData = localStorage.getItem('user');
const userDataLocalStorage = userData ? JSON.parse(userData) : null;

export const name = userDataLocalStorage
  ? userDataLocalStorage.user.name
  : null;
export const email = userDataLocalStorage
  ? userDataLocalStorage.user.email
  : null;
export const surname = userDataLocalStorage
  ? userDataLocalStorage.user.surname
  : null;
export const localId = userDataLocalStorage
  ? userDataLocalStorage.user.id
  : null;
