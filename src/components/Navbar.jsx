import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleLogoClick = useCallback(() => {
    setActive("");
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = useCallback((title) => {
    setActive(title);
    setToggle(false);
  }, []);

  return (
    <nav className="fixed top-0 z-20 w-full bg-primary">
      <div
        className={`${styles.paddingX} mx-auto flex max-w-7xl items-center justify-between py-4`}
      >
        <Link
          to="./"
          className="flex items-center gap-2"
          onClick={handleLogoClick}
        >
          <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
          <h1 className="cursor-pointer text-[20px] font-bold text-white">
            Kundan Mokhale
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:block">
          <ul className="flex gap-10 pr-12">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-[18px] font-medium transition-colors ${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white`}
                  onClick={() => handleNavClick(link.title)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="flex items-center"
            aria-label="Toggle menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-[28px] w-[28px] object-contain"
            />
          </button>

          {toggle && (
            <nav className="black-gradient absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl p-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={`font-poppins text-[16px] font-medium ${
                        active === link.title ? "text-white" : "text-secondary"
                      }`}
                      onClick={() => handleNavClick(link.title)}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
