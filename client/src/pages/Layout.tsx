import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
            <Link to="/">Home</Link>
           {/* <li>
            <Link to="/signUp">Sign up</Link>
          </li>  */}
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */} 
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
