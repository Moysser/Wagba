import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Login from "./src/components/Login";
import RestaurantMenu from "./src/components/RestaurantMenu";
import {
  HydratedRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Form,
} from "react-router";
// import Error from "./src/components/Error";
import "./app.css";
import RestaurantMenu from "./src/components/RestaurantMenu";

const AppLayout = () => {
  // console.log(Header());
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: AppLayout(),
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurants/:nameIt",
        element: <RestaurantMenu />,
      },
    ],
    // errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
