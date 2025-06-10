import {
  Navbar as FlowNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavbarLink,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { menuItems } from "./Menu.jsx";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "fixed bg-white shadow-md" : "relative bg-white"
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 py-4">
        <FlowNavbar
          fluid
          rounded
          className="!bg-white w-full px-0 py-0 shadow-none"
        >
          <NavbarBrand as={Link} to="/" className="flex items-center space-x-3">
            <img src={Logo} className="h-10" alt="Logo Crysense" />
          </NavbarBrand>

          <NavbarToggle className="!text-secondary hover:!bg-secondary-light focus:ring-2 focus:!ring-secondary-light" />

          <NavbarCollapse
            className="font-open-sans md:space-x-8 rtl:space-x-reverse
                       md:static md:bg-transparent md:shadow-none md:rounded-none
                       absolute md:relative top-full left-0 w-full
                       bg-white md:bg-transparent z-50"
          >
            {menuItems.map((item, index) => (
              <NavbarLink
                key={index}
                as={Link}
                to={item.path}
                className={`block py-2 px-4 text-sm
                            border-b border-secondary/30 last:border-b-0
                            hover:text-white hover:bg-secondary transition
                            md:hover:text-secondary md:hover:bg-transparent
                            md:border-0 md:px-0 md:py-0
                            ${
                              location.pathname === item.path
                                ? "!text-secondary font-bold md:!text-secondary"
                                : "!text-primary-darkest md:hover:!text-secondary"
                            }`}
              >
                {item.label}
              </NavbarLink>
            ))}
          </NavbarCollapse>
        </FlowNavbar>
      </div>
    </nav>
  );
};

export default Navbar;