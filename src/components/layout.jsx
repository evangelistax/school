import { useEffect } from "react";
import { useApp } from "../contexts/utils";

export default function Layout({ children }) {
  const { oscuro, isOpen } = useApp();
  useEffect(() => {
    const root = document.documentElement;
    oscuro ? root.classList.add("dark") : root.classList.remove("dark");
  }, [oscuro]);

  const classname = isOpen ? "layout" : "layout collapsed";

  return <div className={classname}>{children}</div>;
}
