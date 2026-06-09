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
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
// import ProtectedRoute from "./ProtectedRoute";
// import ProtectedRoute from "./ProtectedRoute";

const AppRouting = () => {
  return (
    <Routes>

      {/* ✅ MAIN WEBSITE */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ FIXED APPLY ROUTE */}
        <Route 
          path="/apply" 
          element={   
            <ProtectedRoute>       
              <Apply />
              </ProtectedRoute>
          } 
        />

        {/* ✅ AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* ✅ DASHBOARD (NO NAVBAR) */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

    </Routes>
  );
};

export default AppRouting;