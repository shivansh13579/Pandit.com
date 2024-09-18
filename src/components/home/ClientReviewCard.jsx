import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        left: 0,
        backgroundColor: "#fa0808", // Change this to your desired color
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      <FaArrowLeft color="#fff" />
    </button>
  );
};
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: 35,
        backgroundColor: "#fa0808", // Change this to your desired color
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      <FaArrowRight color="#fff" />
    </button>
  );
};

function ClientReviewCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" w-5/6 mx-auto flex flex-col items-center justify-center h-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 1, ease: "linear" },
          },
        }}
        viewport={{ once: true, amount: 0 }}
        initial="hidden"
        whileInView="visible"
        className="w-full flex items-center justify-center text-4xl font-roboto font-semibold pb-4"
      >
        <h1 className="text-2xl text-center sm:text-4xl sm:text-center uppercase">
          <span className="text-[#fa0808]">What Our</span> Clients Say About Us
        </h1>
      </motion.div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={"mobile" ? true : false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        draggable={true}
        className="w-full flex justify-around gap-4 items-center"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        <div className="block h-[270px] max-w-sm px-3 py-1 bg-gray-100 shadow-2xl shadow-white flex flex-col items-center justify-center  rounded-2xl hover:bg-pink-100">
          <div>
            <img
              className="w-[80px] h-[80px]"
              src="	https://www.panditjeeonline.in/wp-content/themes/panditjeeonline/images/default-user.png"
              alt=""
            />
          </div>
          <h1 className="font-semibold font-poppins leading-5 text-2xl py-2">
            Shivam Singh
          </h1>
          <div className=" flex gap-3 items-center justify-start py-1">
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            First, we thought is it worth booking pandit online. But our search
            comes in end after booking pandit jee from this website.
          </p>
        </div>
        <div className="block h-[270px] max-w-sm px-3 py-1 bg-gray-100 shadow-2xl shadow-white flex flex-col items-center justify-center  rounded-2xl hover:bg-pink-100">
          <div>
            <img
              className="w-[80px] h-[80px]"
              src="	https://www.panditjeeonline.in/wp-content/uploads/2022/12/Meghna-Sahay.png.webp"
              alt=""
            />
          </div>
          <h1 className="font-semibold font-poppins leading-5 text-2xl py-2">
            Neha Singh
          </h1>
          <div className=" flex gap-3 items-center justify-start py-1">
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            First, we thought is it worth booking pandit online. But our search
            comes in end after booking pandit jee from this website.
          </p>
        </div>
        <div className="block h-[270px] max-w-sm px-3 py-1 bg-gray-100 shadow-2xl shadow-white flex flex-col items-center justify-center  rounded-2xl hover:bg-pink-100">
          <div>
            <img
              className="w-[80px] h-[80px]"
              src="https://www.panditjeeonline.in/wp-content/uploads/2022/12/Vineeta-Mishra.png.webp"
              alt=""
            />
          </div>
          <h1 className="font-semibold font-poppins leading-5 text-2xl py-2">
            Vineeta Singh
          </h1>
          <div className=" flex gap-3 items-center justify-start py-1">
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            First, we thought is it worth booking pandit online. But our search
            comes in end after booking pandit jee from this website.
          </p>
        </div>
        <div className="block h-[270px] max-w-sm px-3 py-1 bg-gray-100 shadow-2xl shadow-white flex flex-col items-center justify-center  rounded-2xl hover:bg-pink-100">
          <div>
            <img
              className="w-[80px] h-[80px]"
              src="https://www.panditjeeonline.in/wp-content/uploads/2022/12/dhvanya-joshi.png.webp"
              alt=""
            />
          </div>
          <h1 className="font-semibold font-poppins leading-5 text-2xl py-2">
            Shivam Singh
          </h1>
          <div className=" flex gap-3 items-center justify-start py-1">
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            First, we thought is it worth booking pandit online. But our search
            comes in end after booking pandit jee from this website.
          </p>
        </div>
        <div className="block h-[270px] max-w-sm px-3 py-1 bg-gray-100 shadow-2xl shadow-white flex flex-col items-center justify-center  rounded-2xl hover:bg-pink-100">
          <div>
            <img
              className="w-[80px] h-[80px]"
              src="	https://www.panditjeeonline.in/wp-content/uploads/2022/12/vaibhav-maheta.png.webp"
              alt=""
            />
          </div>
          <h1 className="font-semibold font-poppins leading-5 text-2xl py-2">
            Rohan Kumar
          </h1>
          <div className=" flex gap-3 items-center justify-start py-1">
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
            <img
              src="../star.svg"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            First, we thought is it worth booking pandit online. But our search
            comes in end after booking pandit jee from this website.
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default ClientReviewCard;
