import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from './components/Header'
import Footer from './components/Footer'
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./AuthProvider";

function App() {
  return (
    <AuthProvider>
    <div className="w-full bg-[#121212] p-2 flex flex-col justify-between items-center min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
