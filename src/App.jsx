import Layout from "./components/layout";
import Header from "./components/header";
import Main from "./components/main";
import Aside from "./components/aside";
import Notifications from "./components/notifications";
import Chat from "./components/Chat";
function App() {
  return (
    <Layout>
      <Header></Header>
      <Aside></Aside>
      <Notifications></Notifications>
      <Main></Main>
      <Chat></Chat>
    </Layout>
  );
}

export default App;
