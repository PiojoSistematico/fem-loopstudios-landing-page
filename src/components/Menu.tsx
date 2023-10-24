import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";
import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <a href="#" className="header-logo">
        <img src={logo} alt="Logo" />
      </a>

      <button
        className="btn-menu mobile"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={handleClick}
      >
        {isMenuOpen ? (
          <img
            className="icon-close"
            src={iconClose}
            alt="Close Menu"
            aria-hidden="false"
          />
        ) : (
          <img
            className="icon-hamburger"
            src={iconMenu}
            alt="Open Menu"
            aria-hidden="false"
          />
        )}

        <span className="visually-hidden">Menu</span>
      </button>
      <nav
        className={
          isMenuOpen
            ? "menu-open primary-navigation desktop"
            : "primary-navigation desktop"
        }
        id="primary-navigation"
      >
        <ul aria-label="Primary" role="list">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
