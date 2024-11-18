import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainContainer = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainContainer;
