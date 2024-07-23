import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appLinks } from "./Links";
import Navbar from "../layouts/Navbar";

const Landing = React.lazy(() => import("../pages/Landing"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const AboutUs = React.lazy(() => import("../pages/AboutUs"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));

function BaseRouter() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route exact path={appLinks?.Landing} element={<Landing />} />
            <Route path={appLinks?.Login} element={<Login />} />
            <Route path={appLinks?.Register} element={<Register />} />
            <Route path={appLinks?.Dashboard} element={<Dashboard />} />
            <Route path={appLinks?.AboutUs} element={<AboutUs />} />
            <Route path={appLinks?.Contact} element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default BaseRouter;
