import { Outlet } from "react-router-dom";
import HomeMenu from "../components/Home/HomeMenu";
import "../components/Home/HomeMenu.css";

const Home: React.FC = () => {
  return (
    <div
      id="container"
      style={{
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuwPI0UzXYEC_9sMbh1wQY5aE-1QYXc5ySuxNwkVCfUJ5TAvYLCr5KoTQvmT4hRau4oNM&usqp=CAU")',
      }}
    >
      <nav id="home-container">
        <HomeMenu text="To all our trips" navigate="/trips" />
        <HomeMenu text="Not registered yet?" navigate="/signUp" />
        <HomeMenu text="Log In" navigate="/login" />
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
