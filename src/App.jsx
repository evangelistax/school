import Layout from "./components/layout";
import Header from "./components/header";
import Main from "./components/main";
import Aside from "./components/aside";
import ToggleButton from "./components/toggleButton";
import Notifications from "./components/notifications";
import Menu from "./components/menu";
function App() {
  return (
    <Layout>
      <Header></Header>
      <Aside></Aside>
      <Menu></Menu>
      <ToggleButton></ToggleButton>
      <Notifications></Notifications>
      <Main></Main>
    </Layout>
  );
}

export default App;
