import React from "react";
import Topbar from "./Topbar";

export default function Baselayout({ children }) {
  return (
    <>
      <Topbar className="topbar" />
      {children}
    </>
  );
}
