import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Box } from "@material-ui/core";
import { Slider } from "@mui/material";

function MobilePopup() {
  const [isRotate, setIsRotate] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isBeadSize, setIsBeadSize] = useState(false);
  const [isBrand, setIsBrand] = useState(false);
  const [isMaterial, setIsMaterial] = useState(false);
  const [selectGender, setSelectGender] = useState([]);
  const [value, setValue] = useState([0, 5000]);
  // const isAboveScreen = UseMediaQuary("(min-width:1060px)");
  // menu Toogle
  const [isToogle, setIsToogle] = useState(false);

  // const handleToggle = () => {
  //   setIsToogle(!isToogle);

  //   if (!isToogle) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  // };

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
    <>
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
    </>
  );
}

export default MobilePopup;
