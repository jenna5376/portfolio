import React from "react"
import { Link } from "react-router-dom"
import logo from "./images/logo.png"

function Navbar() {
  return (
    <header className="section">
      <nav className="nav">
        <Link className="nav__logo" to="/">
          <img className="img" src={logo} alt="logo" />
        </Link>
        <ul className="nav__menu">
          <Link className="nav__link nav__link--work" to="/">Work</Link>
          <Link className="nav__link" to="about">About</Link>
          <li className="nav__item">
            <a className="nav__link" target="_blank" rel="noopener" href="https://drive.google.com/file/d/1G5OY5Cf2xfemzcIwh7Q0Fgwz_LGnk693/view?usp=sharing">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar