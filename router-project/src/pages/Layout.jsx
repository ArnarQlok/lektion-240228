import { Outlet, Link, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;
