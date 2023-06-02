import { useEffect } from "react";
import { useUIContext } from "../context";

export const useHideMenu = ({ ocultar }) => {
  const { hideMenu, showMenu } = useUIContext();
  useEffect(() => {
    if (ocultar) {
      hideMenu();
    } else {
      showMenu();
    }
  }, [hideMenu, ocultar, showMenu]);
};
