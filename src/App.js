import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LoadingProvider, useLoading } from "./context/loadingContext";

import "./App.css";
import NavSection from "./molecules/nav_section";
import Homepage from "./pages/homepage";
import Profiles from "./pages/profiles";
import ProfilesDetails from "./pages/profiles_details";
import AdminData from "./pages/admin_data";
import LoadingIndicator from "./molecules/loading_indicator.jsx";

const AppContent = () => {
  const { setLoading } = useLoading();
  const location = useLocation();

  useEffect(() => {
    setLoading(true); 
    setTimeout(() => setLoading(false), 500); 
  }, [location.pathname]);

  return (
    <>
      <NavSection />
      <LoadingIndicator />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profiles/:id" element={<ProfilesDetails />} />
        <Route path="/admin" element={<AdminData />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <LoadingProvider>
      <Router>
        <AppContent />
      </Router>
    </LoadingProvider>
  );
}

export default App;
