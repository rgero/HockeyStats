import { HiArrowRightOnRectangle, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import Menus from "./Menus";
import { useDarkMode } from "../../context/DarkModeContext";
import { useLogout } from "../authentication/hooks/useLogout";

const HeaderMenu = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const {logout} = useLogout();
  
  return (
    <Menus>
      <Menus.Menu>
        <Menus.Toggle id="userMenu" />
        <Menus.List id="userMenu">
          <Menus.Button icon={isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />} onClick={toggleDarkMode}>
            Toggle {isDarkMode ? "Light" : "Dark"} Mode
          </Menus.Button>
          <Menus.Button icon={<HiArrowRightOnRectangle />} onClick={logout}>
            Log out
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </Menus>
  );
}

export default HeaderMenu;
