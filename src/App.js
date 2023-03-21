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
import BlogDetails from './pages/BlogDetails';
import NewBlog from './pages/NewBlog';

import blogsData from './api/mockApi'
import useGetBlogs from './api/api'
import { useEffect } from 'react';

function App() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    setBlogs(blogsData)
  }, [])

  useGetBlogs()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={ <NavLayout /> } >
        <Route index element={ <Home /> } />
        <Route exact path="blogs" element={ <BlogsList blogs={blogs} /> } />
        <Route path="blogs/:id" element={ <BlogDetails blogs={blogs}/> } />
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
