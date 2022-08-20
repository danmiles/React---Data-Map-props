import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Global.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import CardElements from "./components/CardElements";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <MainContent />
    <CardElements />
    <Footer />
  </React.StrictMode>
);

