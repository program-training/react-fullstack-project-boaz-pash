import { Outlet } from "react-router-dom";
import HomeMenu from "../components/Home/HomeMenu";
import "../components/Home/HomeMenu.css";

const Home: React.FC = () => {
  return (
    <div id="home-container">
      <>
        <nav>
          <HomeMenu text="To all our trips" navigate="/trips" />
          <HomeMenu text="Not registered yet?" navigate="/signUp" />
          <HomeMenu text="Log In" navigate="/login" />
        </nav>
        <Outlet />
      </>
    </div>
  );
};

export default Home;
