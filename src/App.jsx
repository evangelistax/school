import Layout from "./components/layout";
import Header from "./components/header";
import Main from "./components/main";
import Aside from "./components/aside";
import Notifications from "./components/notifications";
function App() {
  return (
    <Layout>
      <Header></Header>
      <Aside></Aside>
      <Notifications></Notifications>
      <Main></Main>
    </Layout>
  );
}

export default App;
