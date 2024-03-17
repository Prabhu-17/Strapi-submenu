import { useGlobalContext } from "./Context";
import Hero from "./Hero";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import SubMenu from "./SubMenu";

const App = () => {
  return <main>
    <Navbar/>
    <Hero/>
    <SideBar/>
    <SubMenu/>
  </main>;
};
export default App;
