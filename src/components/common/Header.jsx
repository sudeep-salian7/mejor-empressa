import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import logo from "../../images/logo.webp";
import whiteLogo from "../../images/white-logo.webp";
import { HeaderContext } from "../../context/HeaderContext";

const Header = () => {
  const { blogHeader } = useContext(HeaderContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenuBar = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className={`flex justify-between align-middle w-full h-18 shadow-md pl-7 pr-4 py-4 sm:py-6 ${
        blogHeader
          ? "bg-black bg-opacity-20 absolute top-0 text-white"
          : "relative text-darkblue "
      }`}
    >
      <Link
        to="/"
        className={`flex flex-col gap-2 ${blogHeader ? "md:pl-10" : ""}`}
      >
        <img
          src={blogHeader ? whiteLogo : logo}
          alt="logo"
          className={`h-auto w-17 cursor-pointer object-contain xxlg:h-auto xxlg:w-auto ${
            blogHeader ? "bg-cover sm:h-12" : "sm:w-56 sm:h-7"
          }`}
        />
        <span className={`${blogHeader ? "pl-4" : ""}text-sm lg:text-sm `}>
          Compañero de confianza #1 para latinos en Estados Unidos.
        </span>
      </Link>
      <div
        ref={menuRef}
        className={
          isOpen
            ? "flex flex-col z-[999] bg-white shadow-lg gap-2 px-4 py-2 rounded absolute top-16 right-4 mdcustom:absolute mdcustom:flex mdcustom:flex-row mdcustom:gap-8 mdcustom:shadow-none text-xl"
            : "hidden items-center mdcustom:static mdcustom:flex mdcustom:flex-row mdcustom:gap-8 mdcustom:shadow-none text-xl"
        }
      >
        <Link
          to="/categorias"
          className="whitespace-nowrap font-semibold sm:text-sm md:text-base lg:text-lg xxlg:text-3xl   "
          onClick={closeMenu}
        >
          Categorías
        </Link>
        <Link
          to="/"
          className="whitespace-nowrap font-semibold sm:text-sm md:text-base lg:text-lg xxlg:text-3xl "
          onClick={closeMenu}
        >
          Blog
        </Link>
        <Link
          to="/acerca-de-nosotros"
          className="whitespace-nowrap font-semibold sm:text-sm  md:text-base lg:text-xl xxlg:text-3xl  tracking-tighter mx-0 "
          onClick={closeMenu}
        >
          Acerca de nosotros
        </Link>
        <Link
          to="/"
          className="whitespace-nowrap font-semibold sm:text-sm  md:text-base lg:text-xl xxlg:text-3xl   tracking-tighter mx-0 "
          onClick={closeMenu}
        >
          Asociarse con nosotros
        </Link>
      </div>
      <div className="flex items-center gap-3 cursor-pointer mdcustom:hidden">
        <div className="text-xl">
          <FiSearch />
        </div>
        <button
          onClick={(event) => toggleMenuBar(event)}
          className="text-2xl"
          aria-label="toggle menu bar"
        >
          <MdOutlineMenu />
        </button>
      </div>
    </div>
  );
};

export default Header;
