import React from "react";
import "./Footer.css";

const Footer = ({ backlogs }) => {
  const year = new Date();
  const actualYear = year.getFullYear();

  return (
    <footer className="footer">
      <div className="footer__left-side">
        <span>Active tasks: {backlogs[0]?.issues.length} </span>
        <span>
          Finished tasks: {backlogs[backlogs.length - 1]?.issues.length}{" "}
        </span>
      </div>
      <div className="footer__right-side">
        <span>Kanban board by Honeybaey, {actualYear} </span>
      </div>
    </footer>
  );
};

export default Footer;
