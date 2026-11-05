import { Bell, Sun, Moon, Languages, Astroid } from "lucide-react";
import useNotifications from "../stores/notificationStore";
import useAi from "../stores/chatStore";

import { useApp } from "../contexts/utils";
export default function Icons() {
  const status = useNotifications((state) => state.open);
  const open = useNotifications((state) => state.toOpen);
  const close = useNotifications((state) => state.toClose);
  const chatBar = useAi((state) => state.isOpen);
  const openChat = useAi((state) => state.toOpen);
  const closeChat = useAi((state) => state.toClose);
  const { oscuro, changeTheme } = useApp();
  return (
    <>
      <button className="icons" onClick={status ? close : open}>
        <Bell></Bell>
      </button>
      <button className="icons" onClick={changeTheme}>
        {oscuro ? <Sun></Sun> : <Moon></Moon>}
      </button>
      <button className="icons">
        <Languages></Languages>
      </button>
      <button className="icons" onClick={chatBar ? closeChat : openChat}>
        <Astroid></Astroid>
      </button>
    </>
  );
}
