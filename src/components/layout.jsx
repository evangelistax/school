import { useState, useEffect } from "react";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import ToggleButton from "./toggleButton";
import Notifications from "./notifications";

export default function Layout() {
  const [oscuro, setOscuro] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const changeTheme = () => {
    console.log("cambiar tema");
    setOscuro(!oscuro);
    console.log(oscuro);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const switchs = () => {
    setIsActive(!isActive);
    console.log("notificaciones");
  };

  useEffect(() => {
    const root = document.documentElement;
    oscuro ? root.classList.add("dark") : root.classList.remove("dark");
  }, [oscuro]);

  const classname = isOpen ? "layout" : "layout collapsed";

  return (
    <div className={classname}>
      <Header toggle={switchs} theme={changeTheme} valor={oscuro}></Header>
      <Aside status={isOpen}></Aside>
      <ToggleButton toggle={handleClick} status={isOpen}></ToggleButton>
      <Notifications status={isActive}></Notifications>
      <Main></Main>
    </div>
  );
}
