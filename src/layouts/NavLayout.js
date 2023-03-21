import { NavLink, Outlet } from 'react-router-dom'

const NavLayout = () => {
    return (
        <>
        <nav className="nav-main">
            <NavLink to="/"><h1>Home</h1></NavLink>
            <NavLink to="blogs"><h1>Blogs</h1></NavLink>
            <NavLink to="new-blog"><h1>New Blog</h1></NavLink>
        </nav>
        <Outlet />
        </>
    );
}
 
export default NavLayout;