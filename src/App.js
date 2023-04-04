import { useState, useEffect } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import NavLayout from './layouts/NavLayout';
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'
import Home from './pages/Home';
import BlogsList from './pages/BlogsList'
import BlogDetails from './pages/BlogDetails';
import NewBlog from './pages/NewBlog';
import UsersList from './pages/UsersList';

import api from './api/axios';

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
        const { data } = await api.get('/blogs');
        setBlogs(data.blogs)
    } catch (error) {
        console.log(error)
    }
  }
    
  useEffect(() => {
    fetchBlogs()
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<NavLayout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<UsersList />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="register" element={<Register />} />
        <Route exact path="blogs" element={<BlogsList blogs={blogs} />} />
        <Route
          path="blogs/:id"
          element={<BlogDetails blogs={blogs} setBlogs={setBlogs} />}
        />
        <Route path="new-blog" element={<NewBlog setBlogs={setBlogs} />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
