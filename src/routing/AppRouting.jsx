import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";

// Pages
import Home from "../pages/Home";
import Programs from "../pages/Programs";
import Countries from "../pages/Countries";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Apply from "../pages/Apply";
import Dashboard from "../pages/Dashboard";

const AppRouting = () => {
  return (
    <Routes>

      {/* ✅ ALL PAGES WITH NAVBAR */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Route>

      {/* ❌ DASHBOARD OUTSIDE MAINLAYOUT (NO NAVBAR) */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

    </Routes>
  );
};

export default AppRouting;