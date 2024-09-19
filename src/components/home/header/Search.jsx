import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setResults, setStatus } from "@/features/searchSlice";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function Search({ item }) {
  const [isClick, setIsClick] = useState(null);
  const searchQuery = useSelector((state) => state.searches.query);
  const searchStatus = useSelector((state) => state.searches.status);
  const results = useSelector((state) => state.searches.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus("Loading"));
    const delay = setTimeout(() => {
      try {
        const filterData = item.filter((data) => {
          return data.heading.toLowerCase().includes(searchQuery.toLowerCase());
        });
        dispatch(setResults(filterData));
        dispatch(setStatus("Succeeded"));
      } catch (error) {
        dispatch(setStatus("Failed"));
      }
    }, 1000);

    return () => clearTimeout(delay);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isClick === "product" && !event.target.closest("#search-container")) {
        setIsClick(null); // Close the popup if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isClick]);

  const handleClick = (product) => {
    setIsClick(product);
  };

  const handleInputChanges = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div
      id="search-container"
      className="flex-1 flex items-center w-full relative"
    >
      <input
        className="py-1.5 px-2 w-[330px] border rounded-sm outline-none"
        type="text"
        placeholder="Search Product"
        id="text"
        onChange={handleInputChanges}
        onClick={() => handleClick("product")}
      />
      <label for="text" className="bg-gray-400 px-6 py-[10px] rounded-sm">
        <img src="../search.svg" alt="" />
      </label>

      {isClick === "product" ? (
        <div className="absolute w-full h-[300px] bg-white z-10 right-0 left-0 top-10  shadow-black/10 shadow-inner rounded-lg overflow-hidden">
          {/* Loading State */}
          {searchStatus === "Loading" && (
            <div className="flex justify-center items-center h-full">
              <RotatingLines
                visible={true}
                height="60"
                width="60"
                color="#444444"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}

          {/* Success State */}
          {searchStatus === "Succeeded" && (
            <div className="flex flex-col gap-3 items-start justify-start   px-3 py-3">
              {results.length > 0 ? (
                results.map((data) => (
                  <div className="flex gap-2 items-center hover:bg-gray-100 px-3 py-1 rounded-md w-full ">
                    <span>
                      <CiSearch />
                    </span>
                    <Link to={`/product/${data.slug}`}>
                      <p>{data.heading}</p>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="w-full h-full flex items-center justify-center pt-5 mt-6">
                  <h1 className="text-xl font-semibold text-gray-600">
                    No results found
                  </h1>
                </div>
              )}
            </div>
          )}
          {/* Failed State */}
          {searchStatus === "Failed" && (
            <div className="flex justify-center items-center h-full">
              <h1>Error occurred while searching!</h1>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Search;
