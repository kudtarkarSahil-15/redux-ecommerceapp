import React from "react";
import NavBar from "./NavBar";
import { Provider } from 'react-redux'
import { Outlet } from "react-router-dom";
import store from "../reduxToolkit/store/store";

const Home = () => {
  return (
    <>
    <Provider store={store}>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </Provider>
    </>
  );
};

export default Home;
