import Button from "./Button";
import { FaChevronDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" py-5 bg-[#160c6dad] absolute top-0 left-0 w-full z-50">
      <div className="container ">
        <div className="flex items-center">
          <div className="w-1/5">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="w-3/5">
            <ul className=" text-[#EFF4FA] flex gap-10 font-semibold text-lg items-center  justify-center">
              <li>
                <a className="group transition-all flex items-center gap-2">
                  <span className="group-hover:text-brand">Home</span>
                  <FaChevronDown className="text-xs" />
                </a>
              </li>
              <li>
                <a className="group transition-all flex items-center gap-2">
                  <span className="group-hover:text-brand">About</span>
                  <FaChevronDown className="text-xs" />
                </a>
              </li>
              <li>
                <a className="group transition-all flex items-center gap-2">
                  <span className="group-hover:text-brand">Service</span>
                  <FaChevronDown className="text-xs" />
                </a>
              </li>
              <li>
                <a className="group transition-all flex items-center gap-2">
                  <span className="group-hover:text-brand">Portfolio</span>
                  <FaChevronDown className="text-xs" />
                </a>
              </li>
              <li>
                <a className="group transition-all flex items-center gap-2">
                  <span className="group-hover:text-brand">Price</span>
                  <FaChevronDown className="text-xs" />
                </a>
              </li>
              <li>
                <a className="group transition-all flex items-center gap-2">
                  <span className="group-hover:text-brand">Blog</span>
                  <FaChevronDown className="text-xs" />
                </a>
              </li>
            </ul>
          </div>
          <div className=" w-1/5">
            <Button title="Contact Us" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
