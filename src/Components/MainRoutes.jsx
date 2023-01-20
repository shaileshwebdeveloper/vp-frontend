import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageOne } from "./PageOne";
import { PageTwo } from "./PageTwo";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/page-two" element={<PageTwo />} />
    </Routes>
  );
};
