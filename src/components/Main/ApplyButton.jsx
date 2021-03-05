import React from "react";
import "./ApplyButton.css";

const ApplyButton = ({ removeApplyBtn }) => {
  return (
    <button className="apply-btn" onClick={removeApplyBtn}>
      <i className="fa fa-plus-circle"></i>
    </button>
  );
};

export default ApplyButton;
