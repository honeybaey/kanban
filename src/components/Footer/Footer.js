import React from "react";
import "./Footer.css";

const Footer = (props) => {
  const year = new Date();
  const actualYear = year.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__left-side">
        <span>Active tasks: {props.dataMock[0]?.issues.length} </span>
        <span>
          Finished tasks:{" "}
          {props.dataMock[props.dataMock.length - 1]?.issues.length}{" "}
        </span>
      </div>
      <div className="footer__right-side">
        <span>Kanban board by UserName, {actualYear} </span>
      </div>
    </footer>
  );
};

export default Footer;
