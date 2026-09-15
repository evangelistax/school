import { useApp } from "../contexts/utils";

export default function Notifications() {
  const { isActive } = useApp();
  const classname = isActive ? "notifications collapsed" : "notifications";
  return <aside className={classname}></aside>;
}
