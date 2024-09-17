import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Link({ setSelectedPage, selectedPage, page }) {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow-400" : ""
      } hover:text-yellow-300 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
