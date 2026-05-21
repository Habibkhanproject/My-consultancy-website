import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

// Pages
import Home from "../pages/Home";
import Programs from "../pages/Programs";
import Countries from "../pages/Countries";
// import Services from "../pages/Services";
// import Contact from "../pages/Contact";
// import Dashboard from "../pages/Dashboard";
// import Apply from "../pages/Apply";

const AppRouting = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/countries" element={<Countries />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/apply" element={<Apply />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRouting;