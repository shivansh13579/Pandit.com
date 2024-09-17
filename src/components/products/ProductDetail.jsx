import UseMediaQuary from "@/hooks/UseMediaQuary";
import React, { useState } from "react";

function ProductDetail() {
  const [activeSection, setActiveSection] = useState("section1");
  const isAboveScreen = UseMediaQuary("(min-width:1060px)");

  return (
    <>
      {isAboveScreen ? (
        <div>
          <div className="border px-6 py-5">
            <nav>
              <ul className="flex gap-9 text-xl font-semibold">
                <li
                  onClick={() =>
                    setActiveSection(
                      activeSection === "section1" ? null : "section1"
                    )
                  }
                  className={`hover:text-yellow-500 ${
                    activeSection === "section1" ? "text-yellow-500" : ""
                  }`}
                >
                  Shipping & Delivery
                </li>
                <li
                  onClick={() =>
                    setActiveSection(
                      activeSection === "section2" ? null : "section2"
                    )
                  }
                  className={`hover:text-yellow-500 ${
                    activeSection === "section2" ? "text-yellow-500" : ""
                  }`}
                >
                  Return Policies
                </li>
                <li
                  onClick={() =>
                    setActiveSection(
                      activeSection === "section3" ? null : "section3"
                    )
                  }
                  className={`hover:text-yellow-500 ${
                    activeSection === "section3" ? "text-yellow-500" : ""
                  }`}
                >
                  Additional Information
                </li>
                <li
                  onClick={() =>
                    setActiveSection(
                      activeSection === "section4" ? null : "section4"
                    )
                  }
                  className={`hover:text-yellow-500 ${
                    activeSection === "section4" ? "text-yellow-500" : ""
                  }`}
                >
                  Shipping & Delivery
                </li>
              </ul>
            </nav>
          </div>
          <div className="border mb-6 pb-4">
            <div className="py-5 w-5/6 mx-auto">
              {activeSection === "section1" && (
                <div>
                  <p className="pt-4 text-xl font-sans">
                    Amethyst Oval Faceted bracelet in itself is a complete
                    solution to deal with Saturn. Amethyst stone in oval shape
                    becomes suitable despite the mercury placement in the
                    horoscope. This deep-sighted stone penetrates the issues
                    present at the physical, mental, emotional and spiritual
                    levels, then begins its magic.
                  </p>
                  <h1 className="font-bold pt-4 text-xl font-sans">
                    Benefits of Amethyst Oval Faceted Bracelet:
                  </h1>
                  <p className="pt-4 text-xl font-sans">
                    The benefits of wearing an Amethyst Oval Faceted Bracelet
                    are countless; yet some assured benefits experienced by
                    people are shared below:
                  </p>
                  <ul className="pt-2 ml-2 list-disc">
                    <li className="pt-4 text-xl font-sans ">
                      Wearing an amethyst oval faceted bracelet is one of the
                      simplest methods of pleasing the strict Saturn planet.
                    </li>
                    <li className="pt-4 text-xl font-sans">
                      Its energies are well-observed by the third eye chakra and
                      crown chakra which means this bracelet causes spiritual
                      enlightenment without you knowing.
                    </li>
                    <li className="pt-4 text-xl font-sans">
                      Naturally, an interest in spirituality, meditation, and
                      the like practices begin to develop when you and this
                      stone become one.
                    </li>
                    <li className="pt-4 text-xl font-sans">
                      Intuition develops and predictions begin proving true when
                      a man syncs well with the spiritual amethyst stone.
                    </li>
                    <li className="pt-4 text-xl font-sans">
                      Sleep disorders fade away, and you experience a good sleep
                      time.
                    </li>
                    <li className="pt-4 text-xl font-sans">
                      It unblocks career opportunities and blesses you with
                      financial stability.
                    </li>
                  </ul>

                  <h1 className="font-bold pt-4 text-2xl font-sans">
                    Preventions While Wearing the Amethyst Oval Faceted
                    Bracelet:
                  </h1>
                  <p className="pt-4 text-xl font-sans">
                    The benefits of wearing an Amethyst Oval Faceted Bracelet
                    are countless; yet some assured benefits experienced by
                    people are shared below:
                  </p>
                  <h1 className="font-bold pt-4 text-2xl font-sans">
                    On Which Day to Wear Amethyst Oval Faceted Bracelet:
                  </h1>
                  <p className="pt-4 text-xl font-sans">
                    The benefits of wearing an Amethyst Oval Faceted Bracelet
                    are countless; yet some assured benefits experienced by
                    people are shared below:
                  </p>
                  <h1 className="font-bold pt-4 text-2xl font-sans">
                    How Many Amethyst Oval Faceted Bracelets to Wear:
                  </h1>
                  <p className="pt-4 text-xl font-sans">
                    The benefits of wearing an Amethyst Oval Faceted Bracelet
                    are countless; yet some assured benefits experienced by
                    people are shared below:
                  </p>
                </div>
              )}
              {activeSection === "section2" && <div>shivam</div>}
              {activeSection === "section3" && <div>Rahim</div>}
              {activeSection === "section4" && <div>Mohan</div>}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="border px-3 py-2">
            <nav>
              <ul className="flex justify-between text-[16px] font-semibold">
                <li
                  onClick={() =>
                    setActiveSection(
                      activeSection === "section1" ? null : "section1"
                    )
                  }
                  className={`hover:text-yellow-500 ${
                    activeSection === "section1" ? "text-yellow-500" : ""
                  }`}
                >
                  Description
                </li>
                <li
                  onClick={() =>
                    setActiveSection(
                      activeSection === "section2" ? null : "section2"
                    )
                  }
                  className={`hover:text-yellow-500 ${
                    activeSection === "section2" ? "text-yellow-500" : ""
                  }`}
                >
                  Return Policies
                </li>
              </ul>
            </nav>
          </div>
          <div className="border mb-6 pb-4">
            <div className="py-2 w-5/6 mx-auto">
              {activeSection === "section1" && (
                <div>
                  <p className="pt-2 text-[16px] font-sans">
                    Amethyst Oval Faceted bracelet in itself is a complete
                    solution to deal with Saturn. Amethyst stone in oval shape
                    becomes suitable despite the mercury placement in the
                    horoscope.
                  </p>
                  <h1 className="font-bold pt-4 text-xl font-sans">
                    Benefits of Amethyst Oval Faceted Bracelet:
                  </h1>
                  <p className="pt-2 text-[16px] font-sans">
                    The benefits of wearing an Amethyst Oval Faceted Bracelet
                    are countless; yet some assured benefits experienced by
                    people are shared below:
                  </p>
                  <ul className="pt-2 ml-2 list-disc">
                    <li className="pt-4 text-[16px] font-sans ">
                      Wearing an amethyst oval faceted bracelet is one of the
                      simplest methods of pleasing the strict Saturn planet.
                    </li>
                    <li className="pt-4 text-[16px] font-sans">
                      Its energies are well-observed by the third eye chakra and
                      crown chakra which means this bracelet causes spiritual
                      enlightenment without you knowing.
                    </li>
                    <li className="pt-4 text-[16px] font-sans">
                      Naturally, an interest in spirituality, meditation, and
                      the like practices begin to develop when you and this
                      stone become one.
                    </li>
                    <li className="pt-4 text-[16px] font-sans">
                      Intuition develops and predictions begin proving true when
                      a man syncs well with the spiritual amethyst stone.
                    </li>
                    <li className="pt-4 text-[16px] font-sans">
                      Sleep disorders fade away, and you experience a good sleep
                      time.
                    </li>
                    <li className="pt-4 text-[16px] font-sans">
                      It unblocks career opportunities and blesses you with
                      financial stability.
                    </li>
                  </ul>

                  <h1 className="font-bold pt-4 text-xl font-sans">
                    Preventions While Wearing the Amethyst Oval Faceted
                    Bracelet.
                  </h1>
                  <p className="pt-4 text-[16px] font-sans">
                    The benefits of wearing an Amethyst Oval Faceted Bracelet
                    are countless; yet some assured benefits experienced by
                    people are shared below:
                  </p>
                </div>
              )}
              {activeSection === "section2" && (
                <div>
                  <h1 className="font-bold pt-4 text-xl font-sans">
                    Preventions While Wearing the Amethyst Oval Faceted
                    Bracelet.
                  </h1>
                  <p className="pt-4 text-[16px] font-sans">
                    The benefits of wearing an Amethyst Oval Faceted Bracelet
                    are countless; yet some assured benefits experienced by
                    people are shared below:
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
