import React, { useEffect, useState } from "react";
import { productData } from "@/data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

function ProductCartCard() {
  const [cards, setCards] = useState(productData);
  const [isHovered, setIsHovered] = useState({});

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1800 },
      items: 7,
    },
    largeDesktop: {
      breakpoint: { max: 1800, min: 1440 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1440, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const handleHoverImageEnter = (id) => {
    setIsHovered((prev) => ({ ...prev, [id]: true }));
  };
  const handleHoverImageLeave = (id) => {
    setIsHovered((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      draggable={true}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop", "largeDesktop"]}
    >
      {cards.map((card) => (
        <div className="w-full flex items-center justify-center gap-3">
          <div key={card.id} className="w-full h-fit sm:w-[200px] sm:h-[280px]">
            <motion.div
              whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => handleHoverImageEnter(card.id)}
              onMouseLeave={() => handleHoverImageLeave(card.id)}
            >
              <Link to={`/product/${card.slug}`}>
                <img
                  className="w-full h-[180px] rounded-xl"
                  src={isHovered[card.id] ? card.images.src2 : card.images.src1}
                  alt=""
                />
              </Link>
            </motion.div>
            <div>
              <Link>
                <h5 className=" pt-4 w-full text-center font-bold tracking-tight text-gray-900">
                  {card.heading}
                </h5>
              </Link>
              <p className=" font-normal text-gray-700 flex items-center justify-center gap-2 dark:text-gray-400 py-2">
                <span className="line-through text-gray-400">{card.price}</span>
                <span>{card.discountPrice}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default ProductCartCard;
