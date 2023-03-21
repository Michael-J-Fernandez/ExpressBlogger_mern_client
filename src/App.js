import { useState, useEffect } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import NavLayout from './layouts/NavLayout';
import Home from './pages/Home';
import BlogsList from './pages/BlogsList'
import BlogDetails from './pages/BlogDetails';
import NewBlog from './pages/NewBlog';
import api from './api/blogs';

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
        const { data } = await api.get('/');
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
