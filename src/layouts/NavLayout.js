import { NavLink, Link, Outlet } from 'react-router-dom'

const NavLayout = () => {

    const active = {
        color: "black",
        textDecoration: "underline"
    }

    return (
        <>
        <nav className="nav-main">
            <Link to="/"><h1 className="home-title">MERN Blogger</h1></Link>
            <div className="nav-links">
                <NavLink to="/" style={({isActive}) => isActive ? active : null}><h1>Home</h1></NavLink>
                <NavLink to="blogs" style={({isActive}) => isActive ? active : null}><h1>Blogs</h1></NavLink>
                <NavLink to="new-blog" style={({isActive}) => isActive ? active : null}><h1>+ New</h1></NavLink>
            </div>
        </nav>
        <main className="main-content">
            <Outlet />
        </main>
        </>
    );
}
 
export default NavLayout;