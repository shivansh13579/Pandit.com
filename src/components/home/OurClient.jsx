import React, { useEffect } from "react";
import { motion, useAnimate, AnimatePresence } from "framer-motion";

function OurClient() {
  const upperImageList = [
    {
      id: 1,
      src: "https://www.panditjeeonline.in/wp-content/uploads/2022/12/mitsubi-electric-logo.png.webp",
    },
    {
      id: 2,
      src: "https://www.panditjeeonline.in/wp-content/uploads/2024/08/pantaloons-logo.png.webp",
    },
    {
      id: 3,
      src: "https://www.panditjeeonline.in/wp-content/uploads/2022/12/iifl-finance-1.png.webp",
    },
    {
      id: 4,
      src: "https://www.panditjeeonline.in/wp-content/uploads/2022/12/oriqa-news-logo.png.webp",
    },
    {
      id: 5,
      src: "https://www.panditjeeonline.in/wp-content/uploads/2022/12/capri-global-logo.png.webp",
    },
    {
      id: 6,
      src: "https://www.panditjeeonline.in/wp-content/uploads/2022/12/croma-logo.png.webp",
    },
    {
      id: 7,
      src: "https://www.panditjeeonline.in/wp-content/uploads/2022/12/croma-logo.png.webp",
    },
    {
      id: 8,
      src: "https://www.panditjeeonline.in/wp-content/uploads/2024/08/Panda-Juniors-logo-.png.webp",
    },
    {
      id: 9,
      src: "https://www.panditjeeonline.in/wp-content/uploads/2022/12/alogic-logo.png.webp",
    },
    {
      id: 10,
      src: "https://www.panditjeeonline.in/wp-content/uploads/2024/08/pnb-bank-logo.png.webp",
    },
  ];

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      { x: "-100%" },
      { repeat: Infinity, duration: 10, ease: "linear" }
    );
  }, [animate, scope]);

  const handleClick = () => {
    animate.stop();
  };

  return (
    <div className="w-5/6 mx-auto h-full overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-2xl pt-3 sm:text-4xl uppercase sm:pt-3  w-full text-center font-bold mb-4 font-poppins tracking-wider leading-5 text-black">
          <span className="text-red-500 ">Our </span>Clients
        </h1>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 1, ease: "linear" },
            },
          }}
          viewport={{ once: true, amount: 0 }}
          initial="hidden"
          whileInView="visible"
          ref={scope}
          className="flex gap-3 my-3"
          style={{ width: "200%" }}
        >
          {upperImageList.map((image, index) => (
            <div
              key={`upper-${index}`}
              className="bg-white px-4 py-3 rounded-2xl shadow-black/20 shadow-xl w-[200px] h-[100px] flex shrink-0 items-center justify-center"
              onClick={handleClick}
            >
              <img src={image.src} alt="" />
            </div>
          ))}
          {upperImageList.map((image, index) => (
            <div
              key={`upper-${index}`}
              className="bg-white px-4 py-3 rounded-2xl w-[200px] h-[100px] flex shrink-0 items-center justify-center shadow-black/20 shadow-xl"
              onClick={handleClick}
            >
              <img src={image.src} alt="" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default OurClient;
