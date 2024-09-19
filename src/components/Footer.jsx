import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-heroPattern md:bg-cover bg- h-fit xl:h-[480px]">
      <div className="w-5/6 mx-auto text-white py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className=" ">
            <h2 className="text-xl pb-5">About Pt. Rahul Kaushal</h2>
            <p className="text-[15px] pr-3 mr-2">
              Pandit Rahul Kaushal is a world-famous “Celebrity Astrologer”, &
              “Vastu Shastra Consultant.” He started Indian Astrology online a
              decade back. Having intentions of serving mankind with original
              planetary & vastu remedies, he stepped into the trading of
              products like precious gemstones, semi-precious gemstones,
              crystals, Rudrakshas, and other religious articles.
            </p>
          </div>
          <div className=" ">
            <h2 className="text-xl pb-5">Popular Products</h2>
            <nav>
              <ul className="">
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Gemstones</a>
                </li>
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Rudraksha</a>
                </li>
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Lucky Bracelet</a>
                </li>
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Vastu Remedies</a>
                </li>
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Services</a>
                </li>
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Horoscope</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className=" ">
            <h2 className="text-xl pb-5">Site Links</h2>
            <nav>
              <ul>
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Help</a>
                </li>
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Contact Us</a>
                </li>
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Terms of Service Policy</a>
                </li>
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Blogs</a>
                </li>
                <li className="flex gap-2 pt-3">
                  <img
                    src="https://www.pandit.com/cdn/shop/t/5/assets/footer-bullet.png"
                    alt=""
                  />
                  <a href="#">Quick Payments Link</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <h2 className="text-xl pb-5">Customer Support</h2>
            <h2 className="text-xl pb-5">Trichakra Foundation</h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-6 items-center justify-start">
                <img
                  className="h-[40px] w-[40px]"
                  src="https://www.pandit.com/cdn/shop/t/5/assets/call-support-icon.png"
                  alt=""
                />
                <div>
                  <p>9306585702</p>
                  <p>12033#####</p>
                </div>
              </div>
              <div className="flex gap-6 items-center justify-start">
                <img
                  className="h-[40px] w-[40px]"
                  src="https://www.pandit.com/cdn/shop/t/5/assets/timing-icon.png"
                  alt=""
                />
                <div>
                  <p>Mon – Fri : 9AM – 5PM</p>
                  <p>Sat : 9AM – 4PM</p>
                </div>
              </div>
              <div className="flex gap-6 items-center justify-start pt-4">
                <Link to={"https://www.instagram.com/"}>
                  <img
                    className="png h-[30px] w-[30px]"
                    src="fbook.svg"
                    alt=""
                  />
                </Link>
                <Link
                  to={
                    "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                  }
                >
                  <img
                    className="h-[45px] w-[45px]"
                    src="twitter-x.svg"
                    alt=""
                  />
                </Link>
                <Link to={"https://www.instagram.com/"}>
                  <img className="h-[30px] w-[30px]" src="insta.svg" alt="" />
                </Link>
                <Link to={"https://github.com/"}>
                  <img className="h-[30px] w-[30px]" src="youtube.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:place-content-end md:place-items-end pt-3 md:mt-5 md:pt-6">
          <div className="flex-1">
            <p className="text-[14px] text-center md:text-start">
              Following Registered Trademarks are Owned by Pandit Rahul Kaushl -
              Occult, OccultMaster, Trichakra, MahaGuru, Vastu Chakra. Please
              refrain from using them.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:flex md:justify-end gap-4 flex-wrap">
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
  );
}

export default Footer;
