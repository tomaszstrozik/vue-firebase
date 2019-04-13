import { isAdminKey } from "../defaults";

const checkIfIsAdmin = () => {
  const isAdminValue = window.localStorage.getItem(isAdminKey);
  return isAdminValue;
};

export default checkIfIsAdmin;
