import React from "react";
import "./ResultsTable.scss";

export default function ResultsTable(props) {
  const { results } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        {results
          ? results.map((item, index) => (
              <tr key={index}>
                <td>{item ? item.title : ""}</td>
                <td>{item.author_name ? item.author_name : ""}</td>
                <td>{item.subject ? item.subject[0] : ""}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}
