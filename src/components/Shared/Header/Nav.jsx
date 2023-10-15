import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Twirl } from "hamburger-react";
import navLinks from "../../../utils/navLinks";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation() || "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="flex items-center my-container justify-between">
      <span className="block md:hidden lg:block text-3xl font-semibold">
        <Link to="/" className="flex items-center gap-1">
          Shoe Shine
        </Link>
      </span>
      <div className="md:hidden primary-text font-bold">
        <Twirl toggled={open} toggle={setOpen} />
      </div>
      <ul
        className={`flex  h-[calc(100vh-80px)] md:h-auto items-center text-lg font-semibold leading-10 flex-col py-8 md:py-0 md:bg-transparent duration-300 md:px-0 transition-all transform z-30 md:text-black absolute md:static  md:border-none md:flex-row ${
          open
            ? "top-20 right-0 overflow-y-scroll md:overflow-auto border-t-2 left-0 mx-auto w-full bg-[#ffffff] z-20 duration-300"
            : "-left-60 top-20 overflow-hidden duration-300"
        }`}
      >
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              onClick={handleClose}
              className={({ isActive }) =>
                isActive ? "active-link" : "primary-link"
              }
              to={link.link}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <li className="">
          <NavLink
            onClick={handleClose}
            className={({ isActive }) =>
              `${isActive ? "active-link" : "primary-link"} relative`
            }
            to="/offers"
          >
            <span className="">
              <FavoriteBorderOutlinedIcon />
            </span>
            <div className="absolute inline-flex items-center justify-center w-6 p-1 h-6 text-base text-white bg-gray-800 z-20 border-2 border-white rounded-full md:top-1 -top-3 -right-3 md:-right-1">
              <span className="">2</span>
            </div>
          </NavLink>
        </li>
        <li className=" pr-1">
          <NavLink
            onClick={handleClose}
            className={({ isActive }) =>
              `${isActive ? "active-link" : "primary-link"} relative`
            }
            to="/offers"
          >
            <span className="">
              <LocalGroceryStoreOutlinedIcon />
            </span>
            <div className="absolute inline-flex items-center justify-center w-6 p-1 h-6 text-base text-white bg-gray-800 z-20 border-2 border-white rounded-full md:top-1  top-1 right-0 md:-right-1 ">
              <span className="">2</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
