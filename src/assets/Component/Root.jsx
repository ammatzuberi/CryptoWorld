import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import { Outlet } from "react-router-dom";
import classes from "./Root.module.css";

export default function Root() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SideBar onSearch={search} handleSearch={setSearch} />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
