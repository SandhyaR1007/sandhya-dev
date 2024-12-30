import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <HeaderComponent />
      <MainComponent />
    </div>
  );
};

export default Layout;
