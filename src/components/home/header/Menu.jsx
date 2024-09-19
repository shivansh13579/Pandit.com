import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import UseMediaQuary from "@/hooks/UseMediaQuary";

const SocialMediaLinks = () => {
  return (
    <div className="w-full flex flex-col gap-1 items-center justify-start px-4 py-2 mb-3">
      <h1 className="text-[14px] text-gray-500 font-semibold text-center">
        Get Connected with us in Social Media
      </h1>
      <div className="flex gap-4 items-center justify-start pt-2">
        <Link to={"https://www.instagram.com/"}>
          <FaFacebook className="text-2xl text-blue-500" />
        </Link>
        <Link
          to={
            "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
          }
        >
          <IoLogoLinkedin className="text-2xl text-blue-800" />
        </Link>
        <Link to={"https://www.instagram.com/"}>
          <FaSquareInstagram className="text-2xl text-red-500" />
        </Link>
        <Link to={"https://github.com/"}>
          <FaGithub className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

function Menu({
  isMenuToggle,
  handletoggleMenu,
  isRotate,
  handleClickOfProduct,
}) {
  const isAboveScree = UseMediaQuary("(min-width:1200px )");
  return (
    <AnimatePresence>
      {!isAboveScree && isMenuToggle && (
        <motion.div
          key="menu"
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.2, ease: "linear" },
            },
            exit: {
              opacity: 1,
              x: -200,
              transition: { duration: 0.3, ease: "linear" },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white w-full left-0 left-0 top-0 z-20 h-screen fixed flex flex-col overflow-scroll"
        >
          <div className="flex justify-between items-center py-2 px-5 border gap-2">
            <div className="flex-1 w-full">
              <img
                className="w-[200px] h-[40px]"
                src="https://www.pandit.com/cdn/shop/files/panditcomlogo_8fdb6d70-7baa-4df1-ad59-d123869184e9.png?v=1714642504"
                alt=""
              />
            </div>
            <div className="flex-1 flex justify-end w-full ">
              <img
                className="text-end bg-lime-100 px-2 py-2 rounded-full"
                onClick={handletoggleMenu}
                src="../cross.svg"
                alt="Close"
              />
            </div>
          </div>
          <div className="flex flex-col items-start px-5 justify-start text-xl gap-3 py-2">
            <ul className="font-semibold w-full px-3">
              <li className="pt-7 border-b flex items-center">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    ` py-2 pr-4  duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-100  hover:text-orange-700`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="pt-6 flex flex-col items-start border-b w-full">
                <div className="w-full flex justify-between">
                  <NavLink
                    to={"/products"}
                    className={({ isActive }) =>
                      ` pr-2  duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-100  hover:text-orange-700`
                    }
                  >
                    Products
                  </NavLink>
                  <p className="text-xs flex items-center pt-1">
                    <SlArrowDown
                      className={`transition duration-200 ${
                        !isRotate ? "rotate-180" : ""
                      }`}
                      onClick={handleClickOfProduct}
                    />
                  </p>
                </div>
                <div>
                  {!isRotate ? (
                    <div className="w-full">
                      <div className="flex flex-col gap-2 py-2 text-[16px] px-3">
                        <Link to={"/lucky-braclet"} className="text-gray-500">
                          Lucky Bracelet
                        </Link>
                      </div>
                    </div>
                  ) : null}
                </div>
              </li>
              <li className="pt-6 border-b flex items-center">
                <NavLink
                  to={"/services"}
                  className={({ isActive }) =>
                    ` py-2 pr-4  duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-100  hover:text-orange-700`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="pt-6 border-b flex items-center">
                <NavLink
                  to={"/destinatinWedding"}
                  className={({ isActive }) =>
                    `py-2 pr-4  duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-100  hover:text-orange-700`
                  }
                >
                  Wedding
                </NavLink>
              </li>
              <li className="pt-6 border-b flex items-center">
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    ` py-2 pr-4  duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-100  hover:text-orange-700`
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="pt-6 border-b flex items-center">
                <NavLink
                  to={"/ContactUs"}
                  className={({ isActive }) =>
                    ` py-2 pr-4  duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-100  hover:text-orange-700`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          {/* AuthButton */}
          <AuthButtons />
          {/* Social Media Links */}
          <SocialMediaLinks />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Menu;
