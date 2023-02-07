import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md"


const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className="nav">
      <div className={`theme-switch ${theme}`}>
        <div className="switch" onClick={toggleTheme}>
          {" "}
          {theme === "light" ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </div>
      </div>

      <div className="navtext">
        <p>
          <Link to="/" className="link">
            Home
          </Link>
        </p>
        <p>
          <Link to="/about" className="link">
            About
          </Link>
        </p>
        <p>
          <Link to="/works" className="link">
            Works
          </Link>
        </p>

      </div>
    </nav>
  );
};

export default NavBar;
