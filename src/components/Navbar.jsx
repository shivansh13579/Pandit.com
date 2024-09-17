import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (item) => {
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <div className="hidden lg:block">
      <section className="relative bottom-header w-full h-[55px] flex items-center">
        <nav className=" w-[60%] mx-auto">
          <ul className="relative flex justify-between items-center">
            <li className="flex items-center gap-1 text-[18px] text-white">
              <Link to={"/"}>Home</Link>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("product")}
              onMouseLeave={handleMouseLeave}
              className=" flex items-center gap-1 text-[18px] text-white"
            >
              <Link to={"/products"}>Products</Link>
              <IoIosArrowDown />
              <AnimatePresence>
                {activeItem === "product" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute -z-10 origin-left right-0 left-10 top-[40px]  w-1/3 bg-white text-black rounded-sm"
                    style={{ transform: "translateX(-50%)" }}
                  >
                    <div className="flex gap-8 py-5  w-5/6 mx-auto ">
                      <div className="flex gap-4">
                        <ul className="flex gap-3 text-[18px]">
                          <li>
                            <Link
                              to={"/lucky-braclet"}
                              className="hover:text-yellow-400"
                            >
                              Lucky Bracelet
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/lucky-braclet"}
                              className="hover:text-yellow-400"
                            >
                              Oval Faceted Bracelet
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li className=" flex items-center gap-1 text-[18px] text-white">
              <Link to={"/services"}>Services</Link>
            </li>
            {/* Courses */}
            <li className=" flex items-center gap-1 text-[18px] text-white">
              <Link to={"/destinatinWedding"}>Destination Wedding</Link>
            </li>
            {/* Blogs */}
            <li className=" flex items-center gap-1 text-[18px] text-white">
              <Link to={"/about"}>About</Link>
            </li>
            {/* Contact Us */}
            <li className=" flex items-center gap-1 text-[18px] text-white">
              <Link to={"/ContactUs"}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
