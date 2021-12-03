import React from "react";
import { useHistory } from "react-router-dom";
import "./ResultsCards.scss";

export default function ResultCards(props) {
  const { results } = props;
  let history = useHistory();

  const clickedItem = (item) => {
    console.log(item);
    let isbn = item.isbn ? item.isbn[item.isbn.length - 1] : 0;
    if (isbn !== 0) {
      history.push({
        pathname: `/search/book/${isbn}`,
        state: {
          detail: "I am from Search Bar",
          item: item,
        },
      });
    }
  };

  return (
    <div className="ResultCards">
      {results
        ? results.map((item, index) => (
            <div key={index} className="card" onClick={() => clickedItem(item)}>
              <div className="content">
                <div className="title">{item ? item.title : ""}</div>
                <div className="author">
                  {item.author_name ? item.author_name : ""}
                </div>
                <div className="subject">
                  {item.subject ? item.subject[0] : ""}
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
