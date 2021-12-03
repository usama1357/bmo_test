import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";

export default function Header() {
  let history = useHistory();
  let location = useLocation();

  return (
    <div className="header-body">
      <div
        className="title"
        onClick={() => {
          history.push({
            pathname: `/main`,
            state: {
              detail: "I am from Search Bar",
            },
          });
        }}
      >
        My Library
      </div>
      <div className="searchbar">
        {location.pathname.includes("main") ? (
          <div></div>
        ) : (
          <SearchBar type="Header" />
        )}
      </div>
      <span className="links">About</span>
    </div>
  );
}
