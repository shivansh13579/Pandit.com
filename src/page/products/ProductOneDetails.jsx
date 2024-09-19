import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Link, useNavigate, useParams } from "react-router-dom";
import UseMediaQuary from "@/hooks/UseMediaQuary";
import ProductDetail from "@/components/products/ProductDetail";
import "../../components/scroller/customCarousel.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import { addToWishList } from "@/features/wishListSlice";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { toast } from "react-toastify";

function ProductOneDetails() {
  const items = useSelector((state) => state.allCarts);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isAboveScreen = UseMediaQuary("(min-width:1024px)");
  const { slug } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [product, setProduct] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1)); // Wrap around if it's the last image
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1)); // Wrap around if it's the first image
  };

  useEffect(() => {
    const filter = items.item.filter((product) => {
      return product.slug == slug;
    });

    if (filter.length) setProduct(filter[0]);
  }, [slug]);

  return (
    <Layout>
      {isAboveScreen ? (
        <div className="flex flex-col">
          {product ? (
            <div className="w-5/6 h-fit  mx-auto grid grid-cols-12 my-4 py-4 relative ">
              <div
                className="col-span-6 h-[450px] sticky top-[45px] flex"
                style={{ alignSelf: "flex-start" }}
              >
                <div className="relative flex flex-col gap-2 w-1/4">
                  <InnerImageZoom
                    className={`w-[70px] h-[70px] rounded-xl cursor-pointer ${
                      activeIndex === 0 ? "border-2 border-black" : ""
                    }`}
                    src={product.images.src1}
                    alt="Indicator 1"
                    onClick={() => handleImageClick(0)}
                  />
                  <InnerImageZoom
                    className={`w-[70px] h-[70px] rounded-xl cursor-pointer ${
                      activeIndex === 1 ? "border-2 border-black" : ""
                    }`}
                    src={product.images.src2}
                    alt="Indicator 2"
                    onClick={() => handleImageClick(1)}
                  />

                  <img
                    className={`w-[70px] h-[70px] rounded-xl cursor-pointer ${
                      activeIndex === 2 ? "border-2 border-black" : ""
                    }`}
                    src={product.images.src3}
                    alt="Indicator 3"
                    onClick={() => handleImageClick(2)}
                  />
                  <img
                    className={`w-[70px] h-[70px] rounded-xl cursor-pointer ${
                      activeIndex === 3 ? "border-2 border-black" : ""
                    }`}
                    src={product.images.src4}
                    alt="Indicator 4"
                    onClick={() => handleImageClick(3)}
                  />
                  <img
                    className={`w-[70px] h-[70px] rounded-xl cursor-pointer ${
                      activeIndex === 4 ? "border-2 border-black" : ""
                    }`}
                    src={product.images.src5}
                    alt="Indicator 5"
                    onClick={() => handleImageClick(4)}
                  />
                </div>

                <div className="w-3/4">
                  <div className="carousel w-full h-fit">
                    <div
                      id="slide1"
                      className={`carousel-item relative w-full h-fit ${
                        activeIndex === 0 ? "block" : "hidden"
                      }`}
                    >
                      <InnerImageZoom
                        src={product.images.src1}
                        className="w-full rounded-xl"
                      />

                      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button
                          onClick={handlePrevious}
                          className="btn btn-circle"
                        >
                          ❮
                        </button>
                        <button onClick={handleNext} className="btn btn-circle">
                          ❯
                        </button>
                      </div>
                    </div>
                    <div
                      id="slide1"
                      className={`carousel-item relative w-full ${
                        activeIndex === 1 ? "block" : "hidden"
                      }`}
                    >
                      <InnerImageZoom
                        src={product.images.src2}
                        className="w-full rounded-xl"
                      />

                      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button
                          onClick={handlePrevious}
                          className="btn btn-circle"
                        >
                          ❮
                        </button>
                        <button onClick={handleNext} className="btn btn-circle">
                          ❯
                        </button>
                      </div>
                    </div>
                    <div
                      id="slide1"
                      className={`carousel-item relative w-full ${
                        activeIndex === 2 ? "block" : "hidden"
                      }`}
                    >
                      <InnerImageZoom
                        src={product.images.src3}
                        className="w-full rounded-xl"
                      />

                      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button
                          onClick={handlePrevious}
                          className="btn btn-circle"
                        >
                          ❮
                        </button>
                        <button onClick={handleNext} className="btn btn-circle">
                          ❯
                        </button>
                      </div>
                    </div>
                    <div
                      id="slide1"
                      className={`carousel-item relative w-full ${
                        activeIndex === 3 ? "block" : "hidden"
                      }`}
                    >
                      <InnerImageZoom
                        src={product.images.src4}
                        className="w-full rounded-xl"
                      />
                      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button
                          onClick={handlePrevious}
                          className="btn btn-circle"
                        >
                          ❮
                        </button>
                        <button onClick={handleNext} className="btn btn-circle">
                          ❯
                        </button>
                      </div>
                    </div>
                    <div
                      id="slide1"
                      className={`carousel-item relative w-full ${
                        activeIndex === 4 ? "block" : "hidden"
                      }`}
                    >
                      <InnerImageZoom
                        src={product.images.src5}
                        className="w-full rounded-xl"
                      />
                      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button
                          onClick={handlePrevious}
                          className="btn btn-circle"
                        >
                          ❮
                        </button>
                        <button onClick={handleNext} className="btn btn-circle">
                          ❯
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add to Scroll */}
              <div className="col-span-6 pl-5 flex flex-col gap-5 ml-3 h-fit">
                <div className="flex flex-col gap-3 pr-2">
                  <div>
                    <h1 className="text-3xl font-semiboldbold text-slate-700 font-sans">
                      {product.heading}
                    </h1>
                  </div>
                  <div className="flex gap-3 items-center">
                    <p className="text-3xl font-semibold font-sans">
                      {product.discountPrice}
                    </p>
                    <p className="text-3xl text-gray-400 font-sans line-through">
                      {product.price}
                    </p>
                    <div className="w-[90px] h-[80px] flex flex-col items-center bg-starPattern bg-no-repeat bg-center">
                      <p className=" pt-3 font-semibold font-sans ">
                        {product.discount}
                      </p>
                      <p> off</p>
                    </div>
                  </div>
                  <div className="py-2">
                    <h1 className="font-opensans text-xl">
                      {product.description}
                    </h1>
                  </div>

                  <div className="flex items-center justify-start gap-5 px-1 py-2 uppercase h-8 w-full bg-[#c5dcec] rounded-full">
                    <p className="text-[14px] bg-white font-semibold px-3 py-1 rounded-full">
                      1
                    </p>
                    <p className="font-bold">PROCEED NOW</p>
                  </div>

                  {/* Add to Cart */}
                  <div className="flex items-center gap-4 py-3">
                    <div>
                      <button
                        disabled={loading ? true : false}
                        onClick={() => {
                          dispatch(addToCart(product));
                          toast.success("Added To Cart");
                          navigate("/productCart");
                        }}
                        style={{
                          background:
                            "linear-gradient(180deg,#f8e19d 52%,#f4c22c 0%)",
                        }}
                        className="mt-2 w-full  font-semibold py-2 px-6 rounded-full uppercase"
                      >
                        {loading ? (
                          <div>
                            <img src="../spinner.svg" alt="" />
                            <span class="sr-only"></span>
                          </div>
                        ) : (
                          "Add To Cart"
                        )}
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          dispatch(addToWishList(product));
                          toast.success("Added To WishList");
                          navigate("/productWishlist");
                        }}
                        className="w-full mt-2 text-[16px] font-semibold py-2 px-4 rounded-full uppercase border border-gray-300 hover:border-black bg-slate-300 hover:bg-slate-400"
                      >
                        Add To Wishlist
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-8 items-center py-4">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-xl">Delivery & Services</h1>
                      <ul className="felx flex-col gap-3 items-center">
                        <li className="flex gap-1 items-center text-[14px]">
                          {" "}
                          <img
                            className="w-[18px]"
                            src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                            alt=""
                          />
                          <p>Fast Delivery</p>
                        </li>
                        <li className="flex gap-1 items-center text-[14px]">
                          <span>
                            <img
                              className="w-[18px]"
                              src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                              alt=""
                            />
                          </span>
                          Cash on Delivery (COD)Available
                        </li>
                        <li className="flex gap-1 items-center text-[14px]">
                          <span>
                            <img
                              className="w-[18px]"
                              src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                              alt=""
                            />
                          </span>
                          Worldwide ShippingWorldwide Shipping
                        </li>
                        <li className="flex gap-1 items-center text-[14px]">
                          <span>
                            <img
                              className="w-[18px]"
                              src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                              alt=""
                            />
                          </span>
                          Pay now and get 2 Rudraksha Free
                        </li>
                        <li className="flex gap-1 items-center text-[14px]">
                          <span>
                            <img
                              className="w-[18px]"
                              src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                              alt=""
                            />
                          </span>
                          Estimate Delivery Time: 4-6 days
                        </li>
                        <li className="flex gap-1 items-center text-[14px]">
                          <span>
                            <img
                              className="w-[18px]"
                              src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                              alt=""
                            />
                          </span>
                          Secure Payment Checkout
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#bec4c8] py-4 px-10 rounded-full flex flex-col items-center gap-4">
                      <p className="text-[18px] text-center italic">
                        Order by <br />
                        <span className="text-2xl font-semibold">
                          3:30pm{" "}
                        </span>{" "}
                        for
                        <br />
                        Same Day Dispatch
                      </p>
                      <img
                        className="w-[160px] p-2"
                        src="https://www.pandit.com/cdn/shop/t/5/assets/truck2.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ">
                    <h1 className="font-semibold text-xl">Category:</h1>

                    <Link to={"/products"}>
                      <p className="border px-2 py-1 rounded-sm hover:bg-gray-100">
                        {product.heading}
                      </p>
                    </Link>
                  </div>

                  <div className="flex items-center gap-2 justify-between pt-2">
                    <div className="flex gap-2 items-center font-semibold">
                      <img src="../safeCheckout.svg" alt="" />
                      <p>Safe Checkout</p>
                    </div>
                    <div className="flex gap-2 items-center flex-wrap">
                      <img
                        className="w-[30xp] h-[30px]"
                        src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
                        alt=""
                      />
                      <img
                        className="w-[30xp] h-[30px]"
                        src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg"
                        alt=""
                      />
                      <img
                        className="w-[30xp] h-[30px]"
                        src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
                        alt=""
                      />
                      <img
                        className="w-[30xp] h-[30px]"
                        src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/american_express-12858714bc10cdf384b62b8f41d20f56d8c32c1b8fed98b662f2bfc158dcbcf0.svg"
                        alt=""
                      />
                      <img
                        className="w-[30xp] h-[30px]"
                        src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/netbanking-7fea52e535bcab5f2b1b2c9705c838756cf1c218a56cc4bcfd2ce0bf6383e295.svg"
                        alt=""
                      />
                      <img
                        className="w-[30xp] h-[30px]"
                        src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg"
                        alt=""
                      />
                      <img
                        className="w-[30xp] h-[30px]"
                        src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/generic-bfeecc5cc2d14154c4282166d726acdd723bebe3a16b54267520db3181397523.svg"
                        alt=""
                      />
                      <img
                        className="w-[30xp] h-[30px]"
                        src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/netbanking-7fea52e535bcab5f2b1b2c9705c838756cf1c218a56cc4bcfd2ce0bf6383e295.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className="w-5/6 h-fit mx-auto ">
            <ProductDetail />
          </div>
        </div>
      ) : (
        <div className="flex flex-col ">
          {product ? (
            <div className="w-5/6 h-fit mx-auto grid">
              <div className="flex gap-2 order-2 overflow-x-auto scrollbar-hide ">
                <img
                  className={`w-[90px] h-[90px] rounded-xl cursor-pointer ${
                    activeIndex === 0 ? "border-2 border-black" : ""
                  }`}
                  src={product.images.src1}
                  alt="Indicator 1"
                  onClick={() => handleImageClick(0)}
                />
                <img
                  className={`w-[90px] h-[90px] rounded-xl cursor-pointer ${
                    activeIndex === 1 ? "border-2 border-black" : ""
                  }`}
                  src={product.images.src2}
                  alt="Indicator 2"
                  onClick={() => handleImageClick(1)}
                />
                <img
                  className={`w-[90px] h-[90px] rounded-xl cursor-pointer ${
                    activeIndex === 2 ? "border-2 border-black" : ""
                  }`}
                  src={product.images.src3}
                  alt="Indicator 3"
                  onClick={() => handleImageClick(2)}
                />
                <img
                  className={`w-[90px] h-[90px] rounded-xl cursor-pointer ${
                    activeIndex === 3 ? "border-2 border-black" : ""
                  }`}
                  src={product.images.src4}
                  alt="Indicator 4"
                  onClick={() => handleImageClick(3)}
                />
                <img
                  className={`w-[90px] h-[90px] rounded-xl cursor-pointer ${
                    activeIndex === 4 ? "border-2 border-black" : ""
                  }`}
                  src={product.images.src5}
                  alt="Indicator 5"
                  onClick={() => handleImageClick(4)}
                />
              </div>
              <div className="order-1 mb-3">
                <div className="carousel w-full h-fit">
                  <div
                    id="slide1"
                    className={`carousel-item relative w-full h-fit ${
                      activeIndex === 0 ? "block" : "hidden"
                    }`}
                  >
                    <InnerImageZoom
                      src={product.images.src1}
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div
                    id="slide1"
                    className={`carousel-item relative w-full ${
                      activeIndex === 1 ? "block" : "hidden"
                    }`}
                  >
                    <InnerImageZoom
                      src={product.images.src2}
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div
                    id="slide1"
                    className={`carousel-item relative w-full ${
                      activeIndex === 2 ? "block" : "hidden"
                    }`}
                  >
                    <InnerImageZoom
                      src={product.images.src3}
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div
                    id="slide1"
                    className={`carousel-item relative w-full ${
                      activeIndex === 3 ? "block" : "hidden"
                    }`}
                  >
                    <InnerImageZoom
                      src={product.images.src4}
                      className="w-full rounded-xl"
                    />
                  </div>
                  <div
                    id="slide1"
                    className={`carousel-item relative w-full ${
                      activeIndex === 4 ? "block" : "hidden"
                    }`}
                  >
                    <InnerImageZoom
                      src={product.images.src5}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
              {/* Add to Scroll */}

              <div className="order-3 flex flex-col gap-4">
                <div>
                  <h1 className="text-xl pt-4  font-semiboldbold text-slate-700 font-sans">
                    {product.heading}
                  </h1>
                </div>
                <div className="flex gap-3 items-center ">
                  <p className="text-[16px] font-semibold font-sans">
                    {product.discountPrice}
                  </p>
                  <p className="text-[16px] text-gray-400 font-sans line-through">
                    {product.price}
                  </p>
                  <div className="bg-red-600 flex items-center gap-2 px-2 py-1 rounded-full">
                    <p className=" font-semibold font-sans ">
                      {product.discount}
                    </p>
                    <p> off</p>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="flex flex-col gap-4">
                  <div className="w-full">
                    <button
                      disabled={loading}
                      onClick={() => {
                        dispatch(addToCart(product));
                        toast.success("Added To Cart");
                        navigate("/productCart");
                      }}
                      style={{
                        background:
                          "linear-gradient(180deg,#f8e19d 52%,#f4c22c 0%)",
                      }}
                      className="w-full text-xl font-semibold py-2 px-6 rounded-full uppercase"
                    >
                      {loading ? (
                        <div>
                          <img src="../spinner.svg" alt="" />
                          <span class="sr-only"></span>
                        </div>
                      ) : (
                        "Add To Cart"
                      )}
                    </button>
                  </div>
                  <div className="w-full">
                    <button
                      onClick={() => {
                        dispatch(addToWishList(product));
                        toast.success("Added To WishList");
                        navigate("/productWishlist");
                      }}
                      className="w-full  text-xl font-semibold py-2 px-4 rounded-full uppercase border border-gray-300 hover:border-black"
                    >
                      Add To Wishlist
                    </button>
                  </div>
                </div>

                <div className="grid gap-3 items-center">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-xl">Delivery & Services</h1>
                    <ul className="felx flex-col gap-3 items-center">
                      <li className="flex gap-1 items-center text-[14px]">
                        {" "}
                        <img
                          className="w-[18px]"
                          src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                          alt=""
                        />
                        <p>Fast Delivery</p>
                      </li>
                      <li className="flex gap-1 items-center text-[14px]">
                        <span>
                          <img
                            className="w-[18px]"
                            src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                            alt=""
                          />
                        </span>
                        Cash on Delivery (COD)Available
                      </li>
                      <li className="flex gap-1 items-center text-[14px]">
                        <span>
                          <img
                            className="w-[18px]"
                            src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                            alt=""
                          />
                        </span>
                        Worldwide ShippingWorldwide Shipping
                      </li>
                      <li className="flex gap-1 items-center text-[14px]">
                        <span>
                          <img
                            className="w-[18px]"
                            src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                            alt=""
                          />
                        </span>
                        Pay now and get 2 Rudraksha Free
                      </li>
                      <li className="flex gap-1 items-center text-[14px]">
                        <span>
                          <img
                            className="w-[18px]"
                            src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                            alt=""
                          />
                        </span>
                        Estimate Delivery Time: 4-6 days
                      </li>
                      <li className="flex gap-1 items-center text-[14px]">
                        <span>
                          <img
                            className="w-[18px]"
                            src="https://www.pandit.com/cdn/shop/t/5/assets/offer.png"
                            alt=""
                          />
                        </span>
                        Secure Payment Checkout
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#d3d6d8] py-4 px-10 rounded-full flex flex-col items-center gap-4">
                    <p className="text-[18px] text-center italic">
                      Order by <br />
                      <span className="text-2xl font-semibold">
                        3:30pm{" "}
                      </span>{" "}
                      for
                      <br />
                      Same Day Dispatch
                    </p>
                    <img
                      className="w-[160px] p-2"
                      src="https://www.pandit.com/cdn/shop/t/5/assets/truck2.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <h1 className="font-semibold text-xl">Category:</h1>

                  <Link to={"/products"}>
                    <p className="border px-2 py-1 rounded-sm hover:bg-gray-100">
                      {product.heading}
                    </p>
                  </Link>
                </div>

                <div className="grid gap-2 mb-2">
                  <div className="flex gap-2 items-center font-semibold">
                    <img src="../safeCheckout.svg" alt="" />
                    <p>Safe Checkout</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <img
                      className="w-[30xp] h-[30px]"
                      src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
                      alt=""
                    />
                    <img
                      className="w-[30xp] h-[30px]"
                      src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg"
                      alt=""
                    />
                    <img
                      className="w-[30xp] h-[30px]"
                      src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
                      alt=""
                    />
                    <img
                      className="w-[30xp] h-[30px]"
                      src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/american_express-12858714bc10cdf384b62b8f41d20f56d8c32c1b8fed98b662f2bfc158dcbcf0.svg"
                      alt=""
                    />
                    <img
                      className="w-[30xp] h-[30px]"
                      src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/netbanking-7fea52e535bcab5f2b1b2c9705c838756cf1c218a56cc4bcfd2ce0bf6383e295.svg"
                      alt=""
                    />
                    <img
                      className="w-[30xp] h-[30px]"
                      src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg"
                      alt=""
                    />
                    <img
                      className="w-[30xp] h-[30px]"
                      src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/generic-bfeecc5cc2d14154c4282166d726acdd723bebe3a16b54267520db3181397523.svg"
                      alt=""
                    />
                    <img
                      className="w-[30xp] h-[30px]"
                      src="https://www.pandit.com/cdn/shopifycloud/shopify/assets/payment_icons/netbanking-7fea52e535bcab5f2b1b2c9705c838756cf1c218a56cc4bcfd2ce0bf6383e295.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className="w-5/6 h-fit mx-auto mt-4">
            <ProductDetail />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default ProductOneDetails;
