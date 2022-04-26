import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import User from "./components/UserComponent/User";
import CreateUser from "./components/UserComponent/CreateUser";
import EditUser from "./components/UserComponent/EditUser";
import "react-toastify/dist/ReactToastify.css";
import Search from "./components/UserComponent/Search";
import { ToastContainer } from "react-toastify";
import "./global.css";
const App = () => {
  return (
    <Router>
      <section className="mainSec">
        <Navbar />
        {/* <Search /> */}

        <ToastContainer />

        <Routes>
          <Route path="user" element={<User />} />
          <Route path="search" element={<Search />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="edit-user:id" element={<EditUser />} />
        </Routes>
      </section>
    </Router>
  );
};

export default App;
