import * as React from "react";
import "./MainButtons.css";
const MainButtons = (props) => {
  return (
    <button className={`main-buttons ${props.className || ""}`}>
      <div className="vector">{props.mainButton || "All devices"}</div>
    </button>
  );
};
export default MainButtons;
