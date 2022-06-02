import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import ListTripsPage from "./Pages/ListTripsPage";
import { Router } from "./Routes/Router";

function App() {

  return (
    <div>
      <Router/>      
    </div>
  );
}

export default App;