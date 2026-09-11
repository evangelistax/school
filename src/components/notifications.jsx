export default function Notifications({ status }) {
  const classname = status ? "notifications collapsed" : "notifications";
  return <aside className={classname}></aside>;
}
