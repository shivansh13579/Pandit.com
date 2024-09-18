import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseMediaQuary from "@/hooks/UseMediaQuary";
import { productData } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import { addToWishList, removeToWishList } from "@/features/wishListSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function ProductCard({ minPrice, maxPrice, gender }) {
  const isAboveScreen = UseMediaQuary("(min-width:1060px)");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(productData || []);
  const [products, setProducts] = useState(productData || []);
  const [isToogle, setIstoogle] = useState(false);
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.searches.query);

  const handleAddToCart = (event, product) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addToCart(product));
    toast.success("Added To Cart");
    navigate("/productCart");
  };

  const handleAddToWishlist = (event, product) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addToWishList(product));
    toast.success("Added To WishList");
    setIstoogle(true);
    // navigate("/productWishlist");
  };

  const handleRemoveToWishlist = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(removeToWishList(id));
    setIstoogle(false);
  };

  const handleIsHoveredStart = (id) => {
    setIsHovered((prevData) => ({ ...prevData, [id]: true }));
  };

  const handleIsHoveredEnd = (id) => {
    setIsHovered((prevData) => ({ ...prevData, [id]: false }));
  };

  useEffect(() => {
    const f_products = products.filter((product) => {
      const productPrice = parseInt(product.price.replace(/Rs.\s*/, ""));
      const matchesPrice = productPrice >= minPrice && productPrice <= maxPrice;
      const matchesGender =
        gender.length === 0 || gender.includes(product.type);
      const matchSearchQuery =
        searchQuery === "" ||
        product.heading.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesPrice && matchesGender && matchSearchQuery;
    });

    setFilteredProducts(f_products);
  }, [products, maxPrice, minPrice, gender, searchQuery]);

  return isAboveScreen ? (
    <div className="w-full flex justify-center gap-5 flex-wrap">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="relative flex flex-col gap-2 items-start overflow-hidden rounded-lg pb-5 mb-5"
        >
          <Link to={`/product/${product.slug}`}>
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => handleIsHoveredStart(product.id)}
              onHoverEnd={() => handleIsHoveredEnd(product.id)}
            >
              <img
                className="w-[200px] h-[200px] rounded-xl"
                src={
                  isHovered[product.id]
                    ? product.images.src2
                    : product.images.src1
                }
                alt={product.heading}
              />
              <AnimatePresence>
                {isHovered[product.id] && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex gap-3 justify-center left-1/4 bottom-4 absolute"
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
                      onClick={(event) => handleAddToCart(event, product)}
                    >
                      <img src="../cart.svg" alt="Cart" />
                    </motion.button>

                    {/* Wishlist Image */}
                    {isToogle ? (
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
                        onClick={(event) =>
                          handleRemoveToWishlist(event, product.id)
                        }
                        disabled={loading}
                      >
                        <FaRegTrashAlt />
                      </motion.button>
                    ) : (
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
                        onClick={(event) => handleAddToWishlist(event, product)}
                        disabled={loading}
                      >
                        <img src="../heart.svg" alt="Wishlist" />
                      </motion.button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className="text-wrap w-[200px] pt-4">
              <h1 className="text-[17px] font-semibold font-opensans">
                {product.heading}
              </h1>
            </div>
            <div className="space-x-3">
              <span className="line-through text-gray-400">
                {product.discountPrice}
              </span>
              <span className="text-red-600 font-semibold">
                {product.price}
              </span>
            </div>
            <h1 className="absolute right-4 text-white bg-[rgb(252,87,50)] top-4 text-end px-3 py-1 rounded-3xl">
              {product.discount}
            </h1>
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <div className="w-[90%] mx-auto flex justify-center  gap-3 flex-wrap sm:flex sm:justify-center  sm:gap-4 sm:flex-wrap">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="relative flex flex-col gap-2 items-start overflow-hidden rounded-lg pb-5 mb-5"
        >
          <Link to={`/product/${product.slug}`}>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 0.9 }}
              onHoverStart={() => handleIsHoveredStart(product.id)}
              onHoverEnd={() => handleIsHoveredEnd(product.id)}
            >
              <img
                className="w-[125px] h-[120px] sm:w-[200px] sm:h-[200px] rounded-xl sm:rounded-xl"
                src={
                  isHovered[product.id]
                    ? product.images.src2
                    : product.images.src1
                }
                alt={product.heading}
              />
            </motion.div>
            <div className="text-wrap w-[120px] sm:w-[200px] py-1">
              <h1 className="sm:text-[17px] text-[13px] font-bold">
                {product.heading}
              </h1>
            </div>
            <div className=" flex flex-col justify-start">
              <span className="line-through text-gray-400">
                {product.discountPrice}
              </span>
              <span className="text-red-600 font-semibold">
                {product.price}
              </span>
            </div>
            <h1 className="absolute text-sm right-2 top-2 px-2 sm:right-4 text-white bg-[rgb(252,87,50)] sm:top-4 text-end sm:px-3 py-1 rounded-3xl">
              {product.discount}
            </h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
