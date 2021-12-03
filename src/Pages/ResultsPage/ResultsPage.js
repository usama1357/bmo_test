import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResultCards from "../../Components/Cards/ResultCards/ResultCards";
import Cliploader from "../../Components/Loader/ClipLoader/ClipLoader";
// import ResultsTable from "../../Components/Tables/ResultsTable/ResultsTable";
import { URL } from "../../Config/config";
import "./ResultsPage.scss";

export default function ResultsPage() {
  const [loading, setloading] = useState(false);
  const [results, setresults] = useState(null);
  const [title, settitle] = useState(null);

  let location = useLocation();

  const fetchResults = async (val) => {
    setloading(true);
    await axios
      .get(URL + `search.json?q=${val}/`)
      .then(function (response) {
        console.log(response.data.docs);
        setresults(response.data.docs);
        setloading(false);
      })
      .catch(function (error) {
        console.log(error);
        setloading(false);
      });
  };

  useEffect(() => {
    if (location.pathname.includes("search/")) {
      if (location.pathname.split("search/")[1] !== title) {
        settitle(location.pathname.split("search/")[1]);
        fetchResults(location.pathname.split("search/")[1]);
      }
    }
  });

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  const Sort = (val) => {
    console.log(val);
    if (val === "1") {
      let temp = [];
      if (results) {
        results.forEach((element) => {
          temp.push(element);
        });
      }
      temp.sort(dynamicSort("title"));
      setresults(temp);
    } else if (val === "2") {
      let temp = [];
      if (results) {
        results.forEach((element) => {
          temp.push(element);
        });
      }
      temp.sort(dynamicSort("first_publish_year"));
      setresults(temp);
    }
  };

  return (
    <div className="ResultsPage">
      <Cliploader loading={loading} />
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        Showing {results ? results.length : ""} Results for {title} (Click on an
        item)
      </div>
      <div
        style={{
          textAlign: "left",
          marginLeft: "20px",
          marginTop: "10px",
          color: "#ccc",
        }}
      >
        Sort By
      </div>
      <div class="stv-radio-buttons-wrapper">
        <input
          type="radio"
          className="stv-radio-button"
          name="radioButtonTest"
          value="1"
          id="button1"
          onChange={() => Sort("1")}
        />
        <label htmlFor="button1">Name</label>
        <input
          type="radio"
          className="stv-radio-button"
          name="radioButtonTest"
          value="2"
          id="button2"
          onChange={() => Sort("2")}
        />
        <label htmlFor="button2">First Publish Year</label>
      </div>
      {/* <ResultsTable results={results} /> */}
      <ResultCards results={results} />
    </div>
  );
}
