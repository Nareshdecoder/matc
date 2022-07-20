import React, { useContext, useEffect } from "react";
import { Context } from "./context";

import "./App.css";

import "./Assets/Scss/Config.scss";
import "./Assets/Scss/typo.scss";

import CustomRoutes from "./Routes/customRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  let example: any = useContext(Context);
  useEffect(() => {
    let res = example
      ?.api1()
      .then(() => console.log("test-------------->", res));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
