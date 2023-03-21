import { useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import NavLayout from './layouts/NavLayout';
import Home from './pages/Home';
import BlogsList from './pages/BlogsList'
import NewBlog from './pages/NewBlog';

import blogsData from './api/api'
import { useEffect } from 'react';

function App() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    setBlogs(blogsData)
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={ <NavLayout /> } >
        <Route index element={ <Home /> } />
        <Route path="blogs" element={ <BlogsList blogs={blogs} /> } />
        <Route path="new-blog" element={ <NewBlog blogs={blogs} setBlogs={setBlogs} /> } />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
