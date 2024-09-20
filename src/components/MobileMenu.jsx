import React, { useEffect, useState } from "react";
import UseMediaQuary from "../hooks/UseMediaQuary";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/features/authSlice";
import authService from "@/appwrite/auth";
import { BsCart3 } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import { persistor } from "@/app/store";
import Menu from "./home/header/Menu";
import Search from "./home/header/Search";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "gray",
};

function MobileMenu() {
  const [color, setColor] = useState("#ffffff");
  const [loading, setLoading] = useState(false);
  const { cart, item } = useSelector((state) => state.allCarts);
  const [isMenuToggle, setMenuToggle] = useState(false);

  const [isRotate, setIsRotate] = useState(
    localStorage.getItem("isRotate") === "true"
  );

  const handleClickOfProduct = () => {
    const newIsRotate = !isRotate;
    setIsRotate(newIsRotate);
    localStorage.setItem("isRotate", newIsRotate);
  };

  const isAuthenticate = useSelector((state) => state.auth.status);

  const isAboveScree = UseMediaQuary("(min-width:1200px )");

  const dispatch = useDispatch();

  const handleLogOut = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        await authService.logout(); // Perform logout
        dispatch(logout()); // Dispatch Redux action
        toast.success("LogOut Successfully");
        await persistor.purge(); // Clear persisted state
      } catch (error) {
        toast.error("Error logging out");
      } finally {
        setLoading(false); // Stop the loader after the process completes
      }
    }, 1000);
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
            {/* Search Component */}
            <Search item={item} />

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
                  <button
                    disabled={loading}
                    onClick={handleLogOut}
                    value={color}
                    onChange={(input) => setColor(input.target.value)}
                    type="submit"
                    class="flex gap-2 border border-violet-500 hover:bg-violet-500 px-3 py-1 rounded-md font-semibold "
                  >
                    {loading ? (
                      <>
                        <BeatLoader
                          color={color}
                          loading={loading}
                          cssOverride={override}
                          size={8}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                      </>
                    ) : (
                      "LogOut"
                    )}
                  </button>
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
              <div className="relative">
                <Link to={isAuthenticate ? "/productCart" : "/signup"}>
                  <BsCart3 className="text-3xl" />
                </Link>
                <span className="absolute -right-3 bottom-4 text-[12px] px-[5px] bg-yellow-500 rounded-full ">
                  {cart.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Popup */}
      <Menu
        isMenuToggle={isMenuToggle}
        handletoggleMenu={handletoggleMenu}
        isRotate={isRotate}
        handleClickOfProduct={handleClickOfProduct}
        handleLogOut={handleLogOut}
      />
    </div>
  );
}

export default MobileMenu;
