import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home, Contact, Skills, Blog } from './pages'
import './index.css'
import { myStore } from './store';
import { Provider } from 'jotai';
import 'font-awesome/css/font-awesome.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/skills",
    element: <Skills />
  },
  {
    path: "/blog",
    element: <Blog />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={myStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
