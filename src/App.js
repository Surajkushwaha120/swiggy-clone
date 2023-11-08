import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import FoodVilla from "./assets/img/FoodVilla.png";
import { Form, Route, RouterProvider, Routes } from "react-router-dom";
// import About from "./components/About";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestauranteMenu";
import React, { lazy, Suspense, useContext, useState } from "react";
import Instamart from "./components/Instamart";
import Profile from "./components/Profile";
import UserContext from "./utils/UserContext";

const About = lazy(() => import("./components/About"));

export const Titel = () => {
  return (
    <a href="/">
      <img
        className="h-24 pl-2 p-1 "
        alt="logo"
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZpQh6EY7F3c1fJcvo00FnLgY8IiNs3352A&usqp=CAU"
        src={FoodVilla}
      />
    </a>
  );
};

function App() {

   
  const [user, setUser] = useState({
    name: "Sonu Maurya",
    email: "sonu@gmail.com",
  });

  return (
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
        
      >
       
            <div className="App">

        <Header  />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Body />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<h1>hiii I Am About </h1>}>
                <About />
              </Suspense>
            }
          />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
          <Route path="/instamart" element={<Instamart />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>

      <Footer />
    </div>
    </UserContext.Provider>

  );
}

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element:<App />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]) ;
// (<RouterProvider router={appRouter} />)

export default App;
