import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cliploader from "../../Components/Loader/ClipLoader/ClipLoader";
import "./BookPage.scss";

export default function BookPage() {
  const [isbn, setisbn] = useState(null);
  const [loading, setloading] = useState(false);
  const [image, setimage] = useState(null);

  let location = useLocation();

  const fetchResults = async (val) => {
    setloading(true);
    console.log(location);
    await axios
      .get(
        `https://openlibrary.org/api/books?bibkeys=ISBN:${val}&jscmd=data&format=json/`
      )
      .then(function (response) {
        let img = response.data[`ISBN:${val}`].cover
          ? response.data[`ISBN:${val}`].cover.large
          : null;
        console.log(response);
        setimage(img);
        setloading(false);
      })
      .catch(function (error) {
        console.log(error);
        setloading(false);
      });
  };

  useEffect(() => {
    if (location.pathname.includes("book/")) {
      if (location.pathname.split("book/")[1] !== isbn) {
        setisbn(location.pathname.split("book/")[1]);
        fetchResults(location.pathname.split("book/")[1]);
        console.log(location);
      }
    }
  });

  return (
    <div className="BookPage">
      <img
        src={
          image
            ? image
            : "https://createsigns.co.nz/wp-content/uploads/2017/01/no-image-icon-13-2.png"
        }
        alt="cover"
      />
      <div className="BookInfo">
        <Cliploader loading={loading} />
        <p className="title">
          <span className="label"></span>
          {location.state.item.title ? location.state.item.title : "N/A"}
        </p>
        <p>
          <span className="label">Author: </span>
          {location.state.item.author_name
            ? location.state.item.author_name.join(", ")
            : "N/A"}
        </p>
        <p>
          <span className="label">Language: </span>
          {location.state.item.language
            ? location.state.item.language.join(", ")
            : "N/A"}
        </p>
        <p>
          <span className="label">Publish Date: </span>
          {location.state.item.publish_date
            ? location.state.item.publish_date[
                location.state.item.publish_date.length - 1
              ]
            : "N/A"}
        </p>
        <p>
          <span className="label">Subject: </span>
          {location.state.item.subject ? location.state.item.subject[0] : "N/A"}
        </p>
      </div>
    </div>
  );
}
