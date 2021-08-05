import { className } from "postcss-selector-parser";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  const [isActive, setIsActive] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <div className="block">
      <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <div className="title">
              <b className="quotate">Quotate</b>
            </div>
          </div>
          <div></div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="content">
                <span>
                  <b>Welcome, {user.name}</b>
                </span>
              </div>
            </div>
            <div className="navbar-item">
              <Link to="/quotes" className="item">
                Quotes
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/quotes/new" className="item">
                New Quote
              </Link>
            </div>
            <div className="navbar-item">
              <button className="button">
                <Link onClick={handleLogOut} className="logout">
                  Log Out
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
