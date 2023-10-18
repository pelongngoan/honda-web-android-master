import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Dashboard />} />
        <Route path="/page-1" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="/page-3" element={<Page3 />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
