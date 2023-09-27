import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'




function Nav() {

  function openMenu() {
    document.body.classList += " menu--open"
  }

  function closeMenu() {
    document.body.classList.remove("menu--open")
  }

  return (
    <nav>
    <div className="nav__container">
      <div className="logo">
        <h1 className="nav__logo">M</h1>
      </div>
      <ul className="nav__links">
        <li>
          <a href="/" className="nav__link">Home</a>
        </li>
        <li>
          <a href="/" className="btn">Contact Us</a>
        </li>
      </ul>

      <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon  icon="bars" />
      </button>
      <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon  icon="times" />
          </button>
          <ul className="menu__links">
              <li className="menu__list">
                  <a href="/" className="menu__link" onClick={closeMenu}>Home</a>
              </li>
              <li className="menu__list">
                  <a href="/" className="menu__link" onClick={closeMenu}>Contact Us</a>
              </li>
          </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav