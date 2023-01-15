import * as React from "react";
import "./MainButtons.css";
const MainButtons = (props) => {
  return (
    <button className="main-buttons">
      <div className="vector">{props.mainButton || "Send Notification"}</div>
    </button>
  );
};
export default MainButtons;
