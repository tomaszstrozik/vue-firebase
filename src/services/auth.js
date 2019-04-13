import { isAdminKey } from "../defaults";

export default {
  logIn() {
    window.localStorage.setItem(isAdminKey, 1);
  },
  logOut() {
    window.localStorage.setItem(isAdminKey, 0);
  },
  checkIfIsAdmin() {
    const isAdminValue = window.localStorage.getItem(isAdminKey);
    return isAdminValue ? parseInt(isAdminValue) : 0;
  }
};
