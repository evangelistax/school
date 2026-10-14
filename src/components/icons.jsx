import { Bell, Sun, Moon, Languages, Astroid } from "lucide-react";

import { useApp } from "../contexts/utils";
export default function Icons() {
  const { oscuro, changeTheme, switchs } = useApp();
  return (
    <>
      <button className="icons" onClick={switchs}>
        <Bell></Bell>
      </button>
      <button className="icons" onClick={changeTheme}>
        {oscuro ? <Sun></Sun> : <Moon></Moon>}
      </button>
      <button className="icons">
        <Languages></Languages>
      </button>
      <button className="icons">
        <Astroid></Astroid>
      </button>
    </>
  );
}
