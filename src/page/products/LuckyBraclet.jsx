import React, { useState } from "react";
import Layout from "../Layout";
import UseMediaQuary from "@/hooks/UseMediaQuary";
import { SlArrowDown } from "react-icons/sl";
import ProductCard from "../../components/products/ProductCard";
import { Box } from "@material-ui/core";
import { Slider } from "@mui/material";

function LuckyBraclet() {
  const isAboveScreen = UseMediaQuary("(min-width:1060px)");
  const [isRotate, setIsRotate] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isBeadSize, setIsBeadSize] = useState(false);
  const [isBrand, setIsBrand] = useState(false);
  const [isMaterial, setIsMaterial] = useState(false);
  const [selectGender, setSelectGender] = useState([]);
  const [value, setValue] = useState([0, 5000]);
  // menu Toogle
  const [isToogle, setIsToogle] = useState(false);

  const handleToggle = () => {
    setIsToogle(!isToogle);
    if (!isToogle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  // Filter by price
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTimeout(() => {
      setIsToogle(false);
    }, 500);
    document.body.classList.remove("no-scroll");
  };

  // open filter by price
  const handleClickOfPrice = () => {
    setIsRotate(!isRotate);
  };

  // open filter by gender
  const handleClickOfGender = () => {
    setIsGenderOpen(!isGenderOpen);
  };

  // Filter by Gender
  const handleOfGender = (event) => {
    const { id, checked } = event.target;
    setSelectGender((prev) =>
      checked ? [...prev, id] : prev.filter((gender) => gender !== id)
    );

    setTimeout(() => {
      setIsToogle(false);
    }, [300]);
    document.body.classList.remove("no-scroll");
  };

  const handleClickOfBeadSize = () => {
    setIsBeadSize(!isBeadSize);
  };

  const handleClickOfBrand = () => {
    setIsBrand(!isBrand);
  };
  const handleClickOfMaterial = () => {
    setIsMaterial(!isMaterial);
  };

  const valueText = (value) => `₹${value}`;

  return (
    <Layout>
      <div className="w-full relative">
        <img
          className="w-full h-[130px] sm:h-[200px] "
          src="https://www.pandit.com/cdn/shop/collections/crystal_bowl_shop_page_6.webp?v=1718795463&width=1920"
          alt=""
        />
        <h1 className="absolute font-opensans left-0 right-0 font-serif top-10 text-black text-center text-2xl md:text-7xl font-bold tracking-wide">
          Lucky Bracelet
        </h1>
      </div>
      {isAboveScreen ? (
        <div className="w-5/6 mx-auto grid grid-cols-12 my-4 py-4">
          <div className="w-full col-span-3">
            {/* filter by price */}
            <div className="w-5/6 flex flex-col items-start gap-5">
              <div className=" w-full flex items-center justify-between">
                <h1 className="text-xl">Filter by Price</h1>
                <p className="text-xs font-bold">
                  <SlArrowDown
                    className={`transition duration-200 ${
                      !isRotate ? "rotate-180" : ""
                    }`}
                    onClick={handleClickOfPrice}
                  />
                </p>
              </div>
              <div className="w-full">
                {!isRotate ? (
                  <div className="">
                    <Box sx={{ width: 300 }}>
                      <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaLabel={() => "Price range"}
                        getAriaValueText={valueText}
                        min={0}
                        max={5000}
                      />
                    </Box>

                    <div className="w-full flex items-center justify-between mt-2 pt-3">
                      <p>Price:</p>
                      <div className="border flex justify-between gap-10 px-2 py-2 rounded-sm shadow-sm">
                        <span>₹</span>
                        <span>{value[0]}</span>
                      </div>
                      <span>-</span>
                      <div className="border flex justify-between gap-10 px-2 py-2 rounded-sm shadow-sm">
                        <span>₹</span>
                        <span>{value[1]}</span>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="w-full border-b pb-2"></div>
            </div>
            {/* gender */}
            <div className="w-5/6 flex flex-col items-start gap-4 my-3">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-xl">Gender</h1>
                <span className="text-xs font-bold">
                  <SlArrowDown
                    className={`transition duration-200 ${
                      !isGenderOpen ? "rotate-180" : ""
                    }`}
                    onClick={handleClickOfGender}
                  />
                </span>
              </div>
              <div>
                {!isGenderOpen ? (
                  <div className="w-full flex flex-col justify-start items-start">
                    <div className="flex gap-3 justify-start items-center">
                      <input
                        name="Female"
                        id="Female"
                        type="checkbox"
                        checked={selectGender.includes("Female")}
                        onChange={handleOfGender}
                      />
                      <label htmlFor="Female">Female(148)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input
                        name="Male"
                        id="Male"
                        type="checkbox"
                        checked={selectGender.includes("Male")}
                        onChange={handleOfGender}
                      />
                      <label htmlFor="Male">Male(148)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input
                        name="Unisex"
                        id="Unisex"
                        type="checkbox"
                        checked={selectGender.includes("Unisex")}
                        onChange={handleOfGender}
                      />
                      <label htmlFor="Unisex">Unisex(148)</label>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="w-full border-b pb-2"></div>
            </div>
            {/* Bead Size */}
            <div className="w-5/6 flex flex-col items-start gap-4 my-3">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-xl">Bead Size</h1>
                <span className="text-xs font-bold">
                  <SlArrowDown
                    className={`transition duration-200 ${
                      !isBeadSize ? "rotate-180" : ""
                    }`}
                    onClick={handleClickOfBeadSize}
                  />
                </span>
              </div>
              <div>
                {!isBeadSize ? (
                  <div className="w-full flex flex-col justify-start items-start">
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">2.5 – 4 MM (2)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Male" type="checkbox" />
                      <label htmlFor="Male">5 – 6 MM (1)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Unisex" type="checkbox" />
                      <label htmlFor="Unisex">5 – 7 MM (8)</label>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="w-full border-b pb-2"></div>
            </div>
            {/* Brand */}
            <div className="w-5/6 flex flex-col items-start gap-4 my-3">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-xl">Brand</h1>
                <span className="text-xs font-bold">
                  <SlArrowDown
                    className={`transition duration-200 ${
                      !isBrand ? "rotate-180" : ""
                    }`}
                    onClick={handleClickOfBrand}
                  />
                </span>
              </div>
              <div>
                {!isBrand ? (
                  <div className="w-full flex flex-col justify-start items-start">
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">Pandit.com</label>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="w-full border-b pb-2"></div>
            </div>

            {/* Material */}
            <div className="w-5/6 flex flex-col items-start gap-4 my-3">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-xl">Material</h1>
                <span className="text-xs font-bold">
                  <SlArrowDown
                    className={`transition duration-200 ${
                      !isMaterial ? "rotate-180" : ""
                    }`}
                    onClick={handleClickOfMaterial}
                  />
                </span>
              </div>
              <div>
                {!isMaterial ? (
                  <div className="w-full flex flex-col justify-start items-start">
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">Metal (2)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">Silver (1)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">Stone (138)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">Wood (14)</label>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="w-full border-b pb-2"></div>
            </div>
          </div>

          <div className="col-span-9">
            <ProductCard
              minPrice={value[0]}
              maxPrice={value[1]}
              gender={selectGender}
            />
          </div>
        </div>
      ) : (
        <div className="w-full my-3">
          <div className="fixed top-42 left-0 z-10 border bg-white py-2 pl-1 pr-2 rounded-r-2xl">
            <img onClick={handleToggle} src="../strow.svg" alt="" />
          </div>
          <div>
            <ProductCard
              minPrice={value[0]}
              maxPrice={value[1]}
              gender={selectGender}
            />
          </div>
        </div>
      )}

      {/* Mobile Popup */}
      {!isAboveScreen && isToogle && (
        <div className="w-5/6 h-full z-30">
          <div className="w-[94%] h-5 fixed top-0 left-0 right-0 flex items-center justify-evenly py-3 px-2 bg-gray-100 z-30 ">
            <p className="text-[14px]">SIDEBAR PRODUCT</p>
            <img onClick={handleToggle} src="../cross.svg" alt="" />
          </div>

          <div className="w-[94%] h-screen bg-white left-0 right-0 top-8 z-30 fixed flex flex-col overflow-auto pl-2 ">
            {/* filter by price */}
            <div className="w-full  px-3 pt-4 py-2 flex flex-col items-start gap-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[16px]">Filter by Price</h1>
                <p className="text-xs font-bold">
                  <SlArrowDown
                    className={`transition duration-200 ${
                      !isRotate ? "rotate-180" : ""
                    }`}
                    onClick={handleClickOfPrice}
                  />
                </p>
              </div>
              <div className="w-full">
                {!isRotate ? (
                  <div className="">
                    <Box sx={{ width: 200 }} className="px-2 ">
                      <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaLabel={() => "Price range"}
                        getAriaValueText={valueText}
                        min={0}
                        max={5000}
                        sx={{
                          "& .MuiSlider-thumb": {
                            color: "#FF5722", // Thumb color
                          },
                          "& .MuiSlider-track": {
                            color: "#FF9800", // Track color
                          },
                          "& .MuiSlider-rail": {
                            color: "#E0E0E0", // Rail color
                          },
                        }}
                      />
                    </Box>

                    <div className="w-full flex items-center justify-between pt-2">
                      <p>Price:</p>
                      <div className="border flex justify-between gap-10 px-2 py-2 rounded-sm shadow-sm">
                        <span>₹</span>
                        <span>{value[0]}</span>
                      </div>
                      <span>-</span>
                      <div className="border flex justify-between gap-10 px-2 py-2 rounded-sm shadow-sm">
                        <span>₹</span>
                        <span>{value[1]}</span>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="w-full border-b pb-2"></div>
            </div>
            {/* gender */}
            <div className="w-full px-3 pt-4 py-2 flex flex-col items-start gap-4 my-3">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[16px]">Gender</h1>
                <span className="text-xs font-bold">
                  <SlArrowDown
                    className={`transition duration-200 ${
                      !isGenderOpen ? "rotate-180" : ""
                    }`}
                    onClick={handleClickOfGender}
                  />
                </span>
              </div>
              <div>
                {!isGenderOpen ? (
                  <div className="w-full flex flex-col justify-start items-start">
                    <div className="flex gap-3 justify-start items-center">
                      <input
                        name="Female"
                        id="Female"
                        type="checkbox"
                        checked={selectGender.includes("Female")}
                        onChange={handleOfGender}
                      />
                      <label htmlFor="Female">Female(148)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input
                        name="Male"
                        id="Male"
                        type="checkbox"
                        checked={selectGender.includes("Male")}
                        onChange={handleOfGender}
                      />
                      <label htmlFor="Male">Male(148)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input
                        name="Unisex"
                        id="Unisex"
                        type="checkbox"
                        checked={selectGender.includes("Unisex")}
                        onChange={handleOfGender}
                      />
                      <label htmlFor="Unisex">Unisex(148)</label>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="w-full border-b pb-2"></div>
            </div>
            {/* Bead Size */}
            <div className="w-full px-3 pt-4 py-2 flex flex-col items-start gap-4 my-3">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[16px]">Bead Size</h1>
                <span className="text-xs font-bold">
                  <SlArrowDown
                    className={`transition duration-200 ${
                      !isBeadSize ? "rotate-180" : ""
                    }`}
                    onClick={handleClickOfBeadSize}
                  />
                </span>
              </div>
              <div>
                {!isBeadSize ? (
                  <div className="w-full flex flex-col justify-start items-start">
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">2.5 – 4 MM (2)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Male" type="checkbox" />
                      <label htmlFor="Male">5 – 6 MM (1)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Unisex" type="checkbox" />
                      <label htmlFor="Unisex">5 – 7 MM (8)</label>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="w-full border-b pb-2"></div>
            </div>
            {/* Brand */}
            <div className="w-full px-3 pt-4 py-2 flex flex-col items-start gap-4 my-3">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[16px]">Brand</h1>
                <span className="text-xs font-bold">
                  <SlArrowDown
                    className={`transition duration-200 ${
                      !isBrand ? "rotate-180" : ""
                    }`}
                    onClick={handleClickOfBrand}
                  />
                </span>
              </div>
              <div>
                {!isBrand ? (
                  <div className="w-full flex flex-col justify-start items-start">
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">Pandit.com</label>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="w-full border-b pb-2"></div>
            </div>

            {/* Material */}
            <div className="w-full px-3 pt-4 py-2 flex flex-col items-start gap-4 my-3">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-[16px]">Material</h1>
                <span className="text-xs font-bold">
                  <SlArrowDown
                    className={`transition duration-200 ${
                      !isMaterial ? "rotate-180" : ""
                    }`}
                    onClick={handleClickOfMaterial}
                  />
                </span>
              </div>
              <div>
                {!isMaterial ? (
                  <div className="w-full flex flex-col justify-start items-start">
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">Metal (2)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">Silver (1)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">Stone (138)</label>
                    </div>
                    <div className="flex gap-3 justify-start items-center">
                      <input name="Female" type="checkbox" />
                      <label htmlFor="Female">Wood (14)</label>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="w-full border-b pb-2"></div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default LuckyBraclet;
