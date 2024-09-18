import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import { removeToWishList, setWishList } from "@/features/wishListSlice";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { addToCart } from "@/features/cartSlice";
import { toast } from "react-toastify";

function ProductWishlist() {
  const [isHovered, setIsHovered] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.wishLists);
  console.log("wihslist", wishList, wishList.length);

  const handleRemove = (event, id) => {
    event.preventDefault();
    event.stopPropagation(); // Prevents the click event from propagating to the parent
    dispatch(removeToWishList(id));
    toast.error("Remove To WishList");
  };

  const handleCartItem = (event, item) => {
    event.preventDefault();
    event.preventDefault();
    dispatch(addToCart(item));
    toast.success("Added To Cart");
    navigator("/productCart");
  };

  useEffect(() => {
    const saveWishList = localStorage.getItem("wishList");
    if (saveWishList) {
      dispatch(setWishList(JSON.parse(saveWishList)));
    }
  }, [dispatch]);

  const handleIsHoveredStart = (id) => {
    setIsHovered((prevData) => ({ ...prevData, [id]: true }));
  };
  const handleIsHoveredEnd = (id) => {
    setIsHovered((prevData) => ({ ...prevData, [id]: false }));
  };

  return (
    <Layout>
      <div className="">
        <div className="relative ">
          <img
            className="w-full h-[200px]"
            src="https://www.panditjeeonline.in/wp-content/themes/panditjeeonline/images/default-bnr.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <h1 className="absolute left-0 right-0 font-serif top-10 text-white text-center text-2xl md:text-6xl font-bold tracking-widest">
            Your wishlist
          </h1>
        </div>
        {wishList.length > 0 ? (
          <div className="w-5/6 mx-auto flex gap-4 items-center justify-center flex-wrap">
            {wishList.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col gap-2 items-start overflow-hidden rounded-lg mt-5 mb-3"
                onMouseEnter={() => handleIsHoveredStart(item.id)}
                onMouseLeave={() => handleIsHoveredEnd(item.id)}
              >
                <Link to={`/product/${item.slug}`}>
                  <motion.div
                    className=""
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.4 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      className="w-[300px] h-[350px] rounded-xl"
                      src={
                        isHovered[item.id] ? item.images.src2 : item.images.src1
                      }
                      alt={item.heading}
                    />
                  </motion.div>
                </Link>
                <div className="relative flex items-center justify-center gap-3 w-full">
                  <AnimatePresence>
                    {isHovered[item.id] && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className=" flex gap-3 justify-center absolute w-full bottom-4"
                        style={{ transform: "translateX(-50%)" }}
                      >
                        {/* Cart Image */}

                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{
                            delay: 0.2,
                            duration: 0.2,
                            ease: "easeInOut",
                          }}
                          className="bg-yellow-400 py-2 px-2 rounded-sm"
                          disabled={loading}
                          onClick={(event) => handleCartItem(event, item)}
                        >
                          <img src="../cart.svg" alt="Cart" />
                        </motion.button>

                        {/* Wishlist Image */}

                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{
                            delay: 0.4,
                            duration: 0.2,
                            ease: "easeInOut",
                          }}
                          className="bg-yellow-400 py-2 px-2 rounded-sm"
                          disabled={loading}
                          onClick={(event) => handleRemove(event, item.id)}
                        >
                          <FaRegTrashAlt />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="text-wrap w-[300px] pt-4">
                  <h1 className="text-[22px] font-semibold font-opensans">
                    {item.heading}
                  </h1>
                </div>
                <div className="space-x-3">
                  <span className="line-through text-[22px] text-gray-400">
                    {item.discountPrice}
                  </span>
                  <span className="text-red-600 text-[22px] font-semibold">
                    {item.price}
                  </span>
                </div>
                <h1 className="absolute left-4 text-[20px] text-white bg-[rgb(252,87,50)] flex items-center top-4 text-end px-3 py-2 rounded-3xl">
                  {item.discount}
                </h1>

                {/* <AnimatePresence>
                  {isHovered[item.id] && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.3,
                        ease: "easeIn",
                      }}
                      className="absolute right-4 text-[22px] bg-white flex items-center top-6 text-end py-2 px-2 rounded-sm hover:bg-black"
                      style={{ transform: "translateX(-50%)" }}
                    >
                      <button>
                        <FaRegTrashAlt />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence> */}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex w-full text-center bg-pink-50 h-[300px] items-center justify-center ">
            <h1 className="w-5/6 mx-auto uppercase text-black text-xl sm:text-5xl font-bold">
              You have empty wishList
            </h1>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default ProductWishlist;
