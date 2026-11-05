import useSidebar from "../stores/sidebarStore";
import useNotifications from "../stores/notificationStore";
import useAi from "../stores/chatStore";
export default function Layout({ children }) {
  const chatBar = useAi((state) => state.isOpen);
  const status = useSidebar((state) => state.open);
  const isOpen = useNotifications((state) => state.open);
  const close = useNotifications((state) => state.toClose);

  let classname = "";
  {
    status == true && chatBar == true && (classname = "layout chat-open");
  }
  {
    status == false &&
      chatBar == true &&
      (classname = "layout sidebar-collapsed");
  }
  {
    status == true && chatBar == false && (classname = "layout");
  }

  {
    status == false && chatBar == false && (classname = "layout all-collapsed");
  }

  return (
    <div onClick={isOpen ? close : undefined} className={classname}>
      {children}
    </div>
  );
}
