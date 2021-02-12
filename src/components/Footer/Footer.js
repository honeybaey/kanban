import React from "react";
import "./Footer.css";

const Footer = (props) => {
  const year = new Date();
  const actualYear = year.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__left-side">
        <span>Active tasks: {props.backlogs[0]?.issues.length} </span>
        <span>
          Finished tasks:{" "}
          {props.backlogs[props.backlogs.length - 1]?.issues.length}{" "}
        </span>
      </div>
      <div className="footer__right-side">
        <span>Kanban board by UserName, {actualYear} </span>
      </div>
    </footer>
  );
};

export default Footer;
