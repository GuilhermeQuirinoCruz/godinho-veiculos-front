import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import NotFound from './pages/NotFound.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "not-found",
    element: <NotFound />,
  },
  // {
  //   path: "profile",
  //   element: <Profile />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);

// reportWebVitals();