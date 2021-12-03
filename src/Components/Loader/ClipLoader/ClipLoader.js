import React from "react";
import { GuardSpinner } from "react-spinners-kit";
import "./ClipLoader.css";

export default function Cliploader(props) {
  return (
    <div
      className="ClipLoader"
      style={
        props.loading
          ? {
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",

              // opacity: "0.3",
              // background: "#000",
              width: "100%",
              height: "100%",
              zIndex: "10",
              top: "0",
              left: "0",
              position: "fixed",
            }
          : { display: "none" }
      }
    >
      <div
        style={{
          display: "block",
          margin: "0 auto",
          borderColor: "#ffd700",
          marginTop: "35vh",
          marginBottom: "10vh",
          marginLeft: "50%",
          borderWidth: "00px",
        }}
      >
        <GuardSpinner
          frontColor="#ffd700"
          backColor="#fff09e"
          loading={props.loading}
          // css={override}
          size={45}
        />
      </div>
    </div>
  );
}
