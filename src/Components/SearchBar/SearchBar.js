import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.scss";

export default function SearchBar(props) {
  const [value, setvalue] = useState("");
  let history = useHistory();

  const sendReq = () => {
    console.log(value);
    history.push({
      pathname: `/search/${value}`,
      state: {
        detail: "I am from Search Bar",
      },
    });
  };

  return (
    <div
      className={
        props.type === "MainPage"
          ? "MainPage_Search_Container"
          : "SearchBar_Container"
      }
    >
      <input
        className="SearchBar"
        placeholder="Search for books..."
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendReq();
          }
        }}
      />
      <button type="submit" className="searchButton" onClick={() => sendReq()}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}
