import { useState, useEffect } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import axios from 'axios';

import NavLayout from './layouts/NavLayout';
import Home from './pages/Home';
import BlogsList from './pages/BlogsList'
import BlogDetails from './pages/BlogDetails';
import NewBlog from './pages/NewBlog';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
        const { data } = await axios(API_URL);
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
        <Route path="blogs/:id" element={<BlogDetails blogs={blogs} />} />
        <Route
          path="new-blog"
          element={<NewBlog blogs={blogs} setBlogs={setBlogs} />}
        />
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
