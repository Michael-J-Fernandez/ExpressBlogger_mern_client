import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import NavLayout from './layouts/NavLayout';
import Home from './pages/Home';
import BlogsList from './pages/BlogsList'

import blogs from './api/api'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={ <NavLayout /> } >
        <Route index element={ <Home /> } />
        <Route path="blogs" element={ <BlogsList blogs={blogs} /> } />
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
