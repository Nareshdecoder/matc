import { createBrowserHistory } from "history";

import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import About from "../Components/Pages/About/About";
import Home from "../Components/Pages/Home/Home";
import LoginForm from "../Components/Pages/Login/Login";
import Payment from "../Components/Pages/Payment/Payment";
import Success from "../Components/Pages/Success/Success";
import Tour from "../Components/Pages/Tour/Tour";
import Trips from "../Components/Pages/Trips/Trips";
import View from "../Components/Pages/View/View";

import {
  getFromSession,
  saveToSession,
} from "../Utils/SessionStorage/sessionStorage";

const history = createBrowserHistory();

const CustomRoutes = () => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(null);
  const [lock, setLock] = useState(false);

  let loggedData: any = getFromSession("loggedData");

  useEffect(() => {
    if (loggedData && !logged) {
      setLogged(loggedData);
    }
    setLock(true);
  }, []);
  const sessionData = (data: any) => {
    setLogged(data);
    console.log("l");
    saveToSession("loggedData", data);
    navigate("/home");
  };
  console.log("logged", loggedData, lock);
  const renderComponents = (Component: any) => {
    return <Component isLoggedData={setLogged} />;
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginForm
            handleLogin={(data: any) => {
              sessionData(data);
            }}
          />
        }
      />
      <Route
        path="*"
        element={<LoginForm handleLogin={(data: any) => setLogged(data)} />}
      />

      {(logged || loggedData) && (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour/:id" element={<Tour />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/view/:id" element={<View />} />
        </>
      )}
    </Routes>
  );
};
export default CustomRoutes;
