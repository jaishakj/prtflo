// src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Payments from "./pages/Payments";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </BrowserRouter>
  );
}
