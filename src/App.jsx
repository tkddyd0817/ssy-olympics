// import { useState } from 'react'

import "./App.css";
import MedalItem from "./components/MedalItem";
import MedalForm from "./components/MedalForm";
import logolmage from "../public/images.png";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div id="root">
      <div>
        <img src={logolmage} />
      </div>

      <div className="Main-Container">
        <h1>파리 올림픽</h1>
        <MedalForm />
        <MedalItem />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
