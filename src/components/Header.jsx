import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Headroom from "react-headroom";
import UseMediaQuary from "@/hooks/UseMediaQuary";

function Header() {
  const isAboveScreen = UseMediaQuary("(min-width:1080px )");

  return (
    <>
      {isAboveScreen ? (
        <div className="relative">
          {/* Top-Heading section-1 */}
          <div className="section-1 w-full h-fit mx-auto">
            <div className="bg-[#fffed5] w-full md:flex md:items-center text-center font-opensans text-[14px] md:text-[16px] md:gap-7 py-3 px-4 md:pl-[60px] md:pr-10">
              <img
                className="hidden md:block"
                src="https://www.pandit.com/cdn/shop/t/5/assets/notification.png"
                alt=""
              />
              <p>
                Dear Users, We've migrated our site to serve you better! Due to
                security enhancements, your password has been reset. A password
                reset link has been sent on email id. You can reset the
                password.
              </p>
            </div>
          </div>
          <Headroom
            style={{
              webkitTransition: "all .5s ease-in-out",
              mozTransition: "all .5s ease-in-out",
              oTransition: "all .5s ease-in-out",
              transition: "all .5s ease-in-out",
              zIndex: 10,
            }}
          >
            <MobileMenu />
            <Navbar />
          </Headroom>
        </div>
      ) : (
        <div className="relative z-20">
          {/* Top-Heading section-1 */}
          <div className="section-1 w-full h-fit mx-auto hidden sm:block ">
            <div className="bg-[#fffed5] w-full md:flex md:items-center text-center font-opensans text-[14px] md:text-[16px] md:gap-7 py-3 px-4 md:pl-[60px] md:pr-10">
              <img
                className="hidden md:block"
                src="https://www.pandit.com/cdn/shop/t/5/assets/notification.png"
                alt=""
              />
              <p>
                Dear Users, We've migrated our site to serve you better! Due to
                security enhancements.
              </p>
            </div>
          </div>
          <Headroom
            style={{
              webkitTransition: "all .5s ease-in-out",
              mozTransition: "all .5s ease-in-out",
              oTransition: "all .5s ease-in-out",
              transition: "all .5s ease-in-out",
              zIndex: 10,
            }}
          >
            <MobileMenu />
            <Navbar />
          </Headroom>
        </div>
      )}
    </>
  );
}

export default Header;
