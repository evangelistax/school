import { useState } from "react";

import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import ToggleButton from "./toggleButton";
import Notifications from "./notifications";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const switchs = () => {
    setIsActive(!isActive);
  };

  const classname = isOpen ? "layout" : "layout collapsed";

  return (
    <div className={classname}>
      <Header toggle={switchs}></Header>
      <Aside status={isOpen}></Aside>
      <ToggleButton toggle={handleClick} status={isOpen}></ToggleButton>
      <Notifications status={isActive}></Notifications>
      <Main></Main>
    </div>
  );
}
