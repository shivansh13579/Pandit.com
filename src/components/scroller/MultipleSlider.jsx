import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

function MultipleSlider() {
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
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={"mobile" ? true : false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        draggable={true}
      >
        <div className="block h-[300px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
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
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            “ Today received bracelet Quality is 5 star satisfied fully Delivery
            timely parcel paking 5star Overall all respect satisfied Pandit.com
          </p>
          <div>
            <p className="text-xl font-semibold pt-4">Shivam Singh</p>
            <p>Customer from Japan</p>
          </div>
        </div>
        <div className="block h-[300px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
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
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            "Very fast delivery thank you for the gift that came with the
            bracelet"
          </p>
          <div>
            <p className="text-xl font-semibold pt-4">Shivam Singh</p>
            <p>Customer from Japan</p>
          </div>
        </div>
        <div className="block h-[300px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
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
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            "Pranam Guruji 🙏. I have used Ceylon Gomed in heavy weight of 14-15
            carat. It's effect on brain, health.
          </p>
          <div>
            <p className="text-xl font-semibold pt-4">Shivam Singh</p>
            <p>Customer from Japan</p>
          </div>
        </div>
        <div className="block h-[300px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
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
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            "Amazing product sir ... I just loved it.. the packing is so good,
            end i got 2, 5 mukhi rudraksha also for free.
          </p>
          <div>
            <p className="text-xl font-semibold pt-4">Shivam Singh</p>
            <p>Customer from Japan</p>
          </div>
        </div>
        <div className="block h-[300px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
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
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div>
            <p className="text-xl font-semibold pt-4">Shivam Singh</p>
            <p>Customer from Japan</p>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default MultipleSlider;
