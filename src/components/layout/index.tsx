import { Outlet } from "react-router-dom";
import { Header } from "../header";
import React from "react";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
