import { NavLink, Link, Outlet } from "react-router-dom";

const NavLayout = () => {
  const isUserLoggedIn = localStorage.getItem(
    process.env.REACT_APP_TOKEN_HEADER_KEY
  );

  const active = {
    color: "black",
    textDecoration: "underline",
  };

  return (
    <>
      <nav className="nav-main">
        <Link to="/">
          <h1 className="home-title">MERN Blogger</h1>
        </Link>
        <div className="nav-links">
          <NavLink to="/" style={({ isActive }) => (isActive ? active : null)}>
            <h1>Home</h1>
          </NavLink>
          <NavLink
            to="blogs"
            style={({ isActive }) => (isActive ? active : null)}
          >
            <h1>Blogs</h1>
          </NavLink>
          {isUserLoggedIn ? (
            <>
              <NavLink
                to="new-blog"
                style={({ isActive }) => (isActive ? active : null)}
              >
                <h1>+ New</h1>
              </NavLink>
              <NavLink
                to="users"
                style={({ isActive }) => (isActive ? active : null)}
              >
                <h1>Users</h1>
              </NavLink>
              <NavLink
                to="logout"
                style={({ isActive }) => (isActive ? active : null)}
              >
                <h1>Log out</h1>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="login"
                style={({ isActive }) => (isActive ? active : null)}
              >
                <h1>Log in</h1>
              </NavLink>
              <NavLink
                to="register"
                style={({ isActive }) => (isActive ? active : null)}
              >
                <h1>Register</h1>
              </NavLink>
            </>
          )}
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default NavLayout;
