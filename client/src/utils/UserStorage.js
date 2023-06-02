import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from "./localStorage.util";
export class UserStorage {
  static find = () => {
    return {
      agente: getLocalStorage("agente"),
      escritorio: getLocalStorage("escritorio"),
    };
  };
  static create = ({ escritorio, agente }) => {
    setLocalStorage("escritorio", escritorio);
    setLocalStorage("agente", agente);
  };
  static delete = () => {
    removeLocalStorage("escritorio");
    removeLocalStorage("agente");
  };
}
