import React, { Component } from "react";
import "./Header.css";
import logo from "./app-logo.png";
import avatar from "./user-avatar.png";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isDropdownShow: false,
    };
  }

  render() {
    let fragment = (
      <div className="user__dropdown">
        <ul className="user__dropdown-list">
          <li className="user__dropdown-item">
            <a href="/#" className="user__dropdown-link">
              My account
            </a>
          </li>
          <li className="user__dropdown-item">
            <a href="/#" className="user__dropdown-link">
              My tasks
            </a>
          </li>
          <li className="user__dropdown-item">
            <a href="/#" className="user__dropdown-link">
              Log out
            </a>
          </li>
        </ul>
      </div>
    );

    const onShowMenu = () => {
      this.state.isDropdownShow
        ? this.setState({ isDropdownShow: false })
        : this.setState({ isDropdownShow: true });
    };

    return (
      <header className="header">
        <div className="header__left-side">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <h1 className="header__title">Awesome Kanban Board</h1>
        </div>

        <div className="header__right-side">
          <button className="header__button">
            <i className="header__button-icon fa fa-plus-circle"></i>
            Create new list
          </button>
          <div className="user" onClick={onShowMenu}>
            <img className="user__avatar" src={avatar} alt="user-avatar" />
            <i
              className={
                !this.state.isDropdownShow
                  ? "user__icon fa fa-angle-down"
                  : "user__icon fa fa-angle-up"
              }
            ></i>
            {this.state.isDropdownShow ? fragment : null}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
