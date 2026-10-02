import { useApp } from "../contexts/utils";
export default function Form() {
  const { formIsVisible } = useApp();
  const className = formIsVisible ? "form" : "form hidden";
  return <div className={className}></div>;
}
