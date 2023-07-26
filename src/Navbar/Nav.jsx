import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className={classes.navbar}>
        <ul className={classes["navbar-nav"]}>
          <li className={classes["nav-item"]}>
            <a>
              <img
                src="../../src/assets/Component/logo.png"
                alt=""
                style={{
                  height: "40px",
                  width: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </a>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              href="/"
            >
              Home
            </NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <a className={classes["nav-link"]} href="/about">
              About
            </a>
          </li>
          <li className={classes["nav-item"]}>
            <a className={classes["nav-link"]} href="/services">
              Services
            </a>
          </li>
          <li className={classes["nav-item"]}>
            <a className={classes["nav-link"]} href="/nfts">
              Blockchain NFTs
            </a>
          </li>
          <li className={classes["nav-item"]}>
            <a className={classes["nav-link"]} href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
