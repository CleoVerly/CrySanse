import { Link } from "react-router-dom";
import Logo2 from "../../assets/logo2.svg";
import { menuItems } from "../navbar/Menu.jsx";

const Footer = () => {
  return (
    <footer className="bg-secondary-light mt-26">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col items-start mb-4 sm:mb-0">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={Logo2} className="h-10" alt="CrySense Logo" />
            </Link>
            <p className="mt-3 text-white text-base md:text-md font-open-sans max-w-sm">
              Memahami kebutuhan si kecil, dari tangisan hingga tumbuh kembangnya.
            </p>
          </div>

          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 text-sm font-medium font-open-sans text-white sm:mb-0">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="hover:underline me-4 md:me-6">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center font-open-sans">
          © 2025 CrySense All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
