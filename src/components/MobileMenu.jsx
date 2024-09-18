import React, { useEffect, useState } from "react";
import UseMediaQuary from "../hooks/UseMediaQuary";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { setSearchQuery } from "@/features/searchSlice";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/features/authSlice";
import authService from "@/appwrite/auth";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

function MobileMenu() {
  const { cart, item } = useSelector((state) => state.allCarts);
  const [isMenuToggle, setMenuToggle] = useState(false);
  const [isClick, setIsClick] = useState(null);
  const [data, setData] = useState();
  const [isRotate, setIsRotate] = useState(
    localStorage.getItem("isRotate") === "true"
  );

  const handleClickOfProduct = () => {
    const newIsRotate = !isRotate;
    setIsRotate(newIsRotate);
    localStorage.setItem("isRotate", newIsRotate);
  };

  const isAuthenticate = useSelector((state) => state.auth.status);
  const searchQuery = useSelector((state) => state.searches.query);

  useEffect(() => {
    const filterData = item.filter((data) => {
      return data.heading.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setData(filterData);
  }, [searchQuery]);

  const isAboveScree = UseMediaQuary("(min-width:1200px )");

  const dispatch = useDispatch();

  const handleClick = (Item) => {
    setIsClick(Item);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isClick === "product" && !event.target.closest("#search-container")) {
        setIsClick(null); // Close the popup if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClick]);

  const handleLogOut = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  const handleInputChanges = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  useEffect(() => {
    if (isMenuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isMenuToggle]);

  const handletoggleMenu = () => {
    setMenuToggle(!isMenuToggle);
  };

  return (
    <div className="">
      {isAboveScree ? (
        <div className=" bg-white">
          <div className="w-5/6 mx-auto flex items-center justify-between py-4">
            <div className="flex-1">
              <Link to={"/"}>
                <img
                  src="https://www.pandit.com/cdn/shop/files/panditcomlogo_8fdb6d70-7baa-4df1-ad59-d123869184e9.png?v=1714642504&width=440"
                  alt=""
                />
              </Link>
            </div>
            <div
              id="search-container"
              className="flex-1 flex items-center w-full relative"
            >
              <input
                className="py-1.5 px-2 w-[330px] border rounded-sm outline-none"
                type="text"
                placeholder="Search Product"
                id="fname"
                onChange={handleInputChanges}
                onClick={() => handleClick("product")}
              />
              <label
                for="fname"
                className="bg-gray-400 px-6 py-[10px] rounded-sm"
              >
                <img src="../search.svg" alt="" />
              </label>

              {isClick === "product" ? (
                <div className="absolute w-full h-[300px] bg-white z-10 right-0 left-0 top-10  shadow-black/10 shadow-inner rounded-lg overflow-hidden">
                  <div className="flex flex-col gap-3 items-start justify-start   px-3 py-3">
                    {data.map((data) => (
                      <div className="flex gap-2 items-center">
                        <span>
                          <CiSearch />
                        </span>
                        <Link to={`/product/${data.slug}`}>
                          <p>{data.heading}</p>
                        </Link>
                      </div>
                    ))}
                    <div></div>
                    <div></div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="flex-1 flex items-center gap-4 justify-end ">
              {!isAuthenticate ? (
                <>
                  <div className="flex gap-2 border border-violet-500 hover:bg-violet-300 px-3 py-1 rounded-md font-semibold ">
                    <Link to={"/login"} className="flex gap-2">
                      <img src="../login.svg" alt="" />
                      <p>LogIn</p>
                    </Link>
                  </div>
                  <div className="flex gap-2 border border-violet-500 hover:bg-violet-300 px-3 py-1 rounded-md font-semibold ">
                    <Link to={"/signup"} className="flex gap-2">
                      <img src="../login.svg" alt="" />
                      <p>SignUp</p>
                    </Link>
                  </div>
                  <div className="flex gap-6 h-full relative">
                    <span className="border-r-2 font-bold"></span>
                    <Link to={"/signup"}>
                      <p className="flex items-center justify-center gap-1 text-xl">
                        <span className="">
                          <BsCart3 className="text-2xl" />
                        </span>
                        Cart
                      </p>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div
                    onClick={handleLogOut}
                    className="flex gap-2 border border-violet-500 hover:bg-violet-300 px-3 py-1 rounded-md font-semibold "
                  >
                    <img src="../login.svg" alt="" />
                    <p>LogOut</p>
                  </div>
                  <div className="flex gap-2 border border-pink-500 hover:bg-pink-300 px-3 py-1 rounded-md font-semibold">
                    <Link to={"/productWishlist"} className="flex gap-2">
                      <img src="../heart.svg" alt="" />
                      <p>Wishlist</p>
                    </Link>
                  </div>
                  {/* Add To Cart */}
                  <div className="flex gap-6 h-full relative">
                    <span className="border-r-2 font-bold pr-2"></span>
                    <Link to={"/productCart"}>
                      <img className="w-7 " src="../cart.svg" alt="" />
                    </Link>

                    <span className="absolute -right-5 bottom-4 text-[16px] px-[7px] bg-yellow-500 rounded-full ">
                      {cart.length}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <div className="w-5/6 mx-auto flex items-center justify-between py-4 ">
            <div className="flex-1 order-2 w-full h-full">
              <Link to={"/"}>
                <img
                  className=" h-[40px] w-full"
                  src="https://www.pandit.com/cdn/shop/files/panditcomlogo_8fdb6d70-7baa-4df1-ad59-d123869184e9.png?v=1714642504"
                  alt=""
                />
              </Link>
            </div>
            <div className="flex-1 order-1 ">
              <SlMenu
                onClick={handletoggleMenu}
                className="font-bold font-black text-2xl"
              />
            </div>
            <div className="flex-1 flex items-center gap-6 justify-end  order-3">
              {!isAuthenticate ? (
                <>
                  <div className="relative">
                    <Link to={"/signup"}>
                      <BsCart3 className="text-3xl" />
                    </Link>
                    <span className="absolute -right-3 bottom-4 text-[12px] px-[5px] bg-yellow-500 rounded-full ">
                      {cart.length}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative">
                    <Link to={"/productCart"}>
                      <BsCart3 className="text-3xl" />
                    </Link>
                    <span className="absolute -right-3 bottom-4 text-[12px] px-[5px] bg-yellow-500 rounded-full ">
                      {cart.length}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Popup */}
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
            <div className="flex justify-between items-center py-4 px-5 border gap-3">
              <div className="flex-1 w-full">
                <img
                  className="w-[200px] h-[40px]"
                  src="https://www.pandit.com/cdn/shop/files/panditcomlogo_8fdb6d70-7baa-4df1-ad59-d123869184e9.png?v=1714642504"
                  alt=""
                />
              </div>
              <div className="flex-1 flex justify-end w-full ">
                <img
                  className="text-end bg-lime-100 px-3 py-3 rounded-full"
                  onClick={handletoggleMenu}
                  src="../cross.svg"
                  alt="Close"
                />
              </div>
            </div>
            <div className="flex flex-col items-start px-5 justify-start text-xl gap-5 mt-4 py-2">
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
            <div className=" flex items-center px-5 gap-4 justify-start py-5 mt-3">
              {!isAuthenticate ? (
                <>
                  <div className="bg-lime-200 hover:bg-lime-300 text-black flex gap-2 border border-violet-500  px-3 py-1 rounded-md font-semibold ">
                    <Link to={"/login"} className="flex gap-6">
                      <p>LogIn</p>
                    </Link>
                  </div>
                  <div className="bg-lime-200 hover:bg-lime-300 text-black flex gap-2 border border-violet-500 px-3 py-1 rounded-md font-semibold ">
                    <Link to={"/signup"} className="flex gap-4">
                      <p>SignUp</p>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div
                    onClick={handleLogOut}
                    className="bg-lime-200 hover:bg-lime-300 text-black flex gap-2 border border-violet-500 hover:bg-violet-300 px-3 py-1 rounded-md font-semibold text-white"
                  >
                    <p>LogOut</p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
