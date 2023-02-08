import './App.css';
import React, {useState} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root />
    ),
    errorElement: <NotFound />,
    children : [
      { index: true, element: <Home />},
      { path : "/videos", element: <Videos/>},
      { path : "/videos/:videoId", element : <VideoDetail />}
    ]
  }
])

function App() {
  // const filters = ['all', 'active', 'completed'];
  // const [filter, setFilter] = useState(filters[0]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;