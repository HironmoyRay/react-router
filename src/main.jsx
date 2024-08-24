import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Users from "./components/Ussers/Users";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
