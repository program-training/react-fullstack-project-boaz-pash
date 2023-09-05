import { Link, Outlet } from "react-router-dom";
import "./HomeMenu.css";

interface Props {
  text: string;
  navigate: string;
}

const HomeMenu: React.FC<Props> = (props) => {
  return (
    <div className="home-navigate">
      <Link to={props.navigate}>{props.text}</Link>;
      <Outlet />
    </div>
  );
};
export default HomeMenu;
