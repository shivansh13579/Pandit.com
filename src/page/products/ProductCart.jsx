import React, { useEffect } from "react";
import Layout from "../Layout";
import MultipleSlider from "@/components/scroller/MultipleSlider";
import UseMediaQuary from "@/hooks/UseMediaQuary";
import ProductCartCard from "@/components/scroller/ProductCartCard";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  setCartItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "@/features/cartSlice";
import { toast } from "react-toastify";

function ProductCart() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCarts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const saveCart = localStorage.getItem("cart");
    if (saveCart) {
      dispatch(setCartItem(JSON.parse(saveCart)));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  const isAboveScreen = UseMediaQuary("(min-width:1024px)");

  return (
    <Layout>
      <div className=" relative">
        <img
          className="w-full h-[200px]  object-cover"
          src="../img1.jpg"
          alt=""
        />
        <h1 className="absolute left-0 right-0 font-serif top-10 text-black text-center text-2xl md:text-5xl font-bold tracking-wide">
          Shoping Cart
        </h1>
      </div>
      {isAboveScreen ? (
        <>
          <div className=" w-5/6 mx-auto flex  grid grid-cols-12 py-6 my-6">
            <table className="col-span-8 mr-2">
              <thead className="flex justify-between items-center w-full">
                <tr className="w-full flex justify-between items-center pb-2">
                  <th className="basis-1/2 text-xl">Product</th>
                  <th className="basis-1/4 text-center text-xl">Price</th>
                  <th className="basis-1/4 text-center text-xl">Quantity</th>
                  <th className="basis-1/4 text-center text-xl">Total</th>
                </tr>
              </thead>
              <tbody className="h-fit">
                {cart.map((product) => (
                  <tr
                    key={product.id}
                    className="w-full h-[200px] border-b border-t mb-3 flex justify-between items-center"
                  >
                    <td className="basis-1/2 flex justify-start items-center gap-5">
                      <div>
                        <img
                          className="w-[80px] h-[80px] rounded-sm"
                          src={product.images.src1}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-2 justify-start items-start">
                        <h1>{product.heading}</h1>
                        <button
                          onClick={() => {
                            dispatch(removeItem(product.id));
                            toast.success("Removed From Cart");
                          }}
                          className="border-b-black border-b"
                        >
                          Remove
                        </button>
                      </div>
                    </td>

                    <td className="basis-1/4 flex gap-3 justify-start items-center ">
                      <p className="line-through text-gray-300">
                        {product.price}
                      </p>
                      <p>{product.discountPrice}</p>
                    </td>
                    <td className="basis-1/4 bg-gray-300 flex gap-6 justify-center items-center rounded-full py-1">
                      <p
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        className="text-2xl font-bold"
                      >
                        -
                      </p>
                      <p className="text-xl font-semibold">
                        {product.quantity}
                      </p>
                      <p
                        onClick={() => dispatch(increaseQuantity(product.id))}
                        className="text-xl font-bold"
                      >
                        +
                      </p>
                    </td>
                    <td className="basis-1/4 text-center">
                      Rs. {product.discountPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="col-span-4 ml-3 flex justify-end w-full">
              <div className="bg-gray-100 flex flex-col gap-3 h-fit w-[400px]  items-start px-8 py-8 rounded-md">
                <div className="flex justify-between items-center  w-full">
                  <h1 className="text-3xl font-semibold">Total Item</h1>
                  <p className="text-2xl font-bold">{totalQuantity}</p>
                </div>
                <div className="flex justify-between items-center  w-full">
                  <h1 className="text-3xl font-semibold">Total Price</h1>
                  <p className="text-2xl font-bold">Rs. {totalPrice}</p>
                </div>
                <div className="text-center pt-4 text-[17px] text-gray-500 w-full ">
                  <p>Taxes and shipping calculated at checkout</p>
                </div>
                <div className="text-center w-full pt-4">
                  I agree with the{" "}
                  <span>
                    <a
                      className="underline font-semibold"
                      href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/"
                    >
                      terms and conditions
                    </a>
                  </span>{" "}
                </div>
                <div className="text-center w-full bg-black py-3 rounded-full mt-2">
                  <button className="text-white font-semibold">
                    Check Out
                  </button>
                </div>
                <p className="text-center w-full pt-2">
                  Guarantee Safe Checkout
                </p>
                <div className="flex gap-2 items-center justify-center w-full">
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
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/6 mx-auto flex flex-col justify-between my-7">
            <MultipleSlider />
          </div>
          <div className="w-5/6 mx-auto flex items-center justify-center  my-7 py-4">
            <h1 className="font-semibold text-5xl py-4">
              You may also like this.
            </h1>
          </div>
          <div className="w-5/6 mx-auto text-center  my-4 pb-7">
            <ProductCartCard />
          </div>
        </>
      ) : (
        <>
          <div className=" w-5/6 mx-auto grid  py-6 my-6">
            <table className="w-full my-2">
              <tbody className="w-full h-fit my-2">
                {cart.map((product) => (
                  <tr
                    key={product.id}
                    className="w-full border-b border-t flex gap-4"
                  >
                    <td className="basis-1/4 flex justify-start items-start pt-1 ">
                      <div>
                        <img
                          className="w-full h-full rounded-lg"
                          src={product.images.src1}
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="basis-3/4 flex flex-col gap-1 justify-start items-start">
                      <div className="w-full flex flex-col gap-1 justify-start items-start border-b pb-1">
                        <h1>{product.heading}</h1>
                        <button
                          onClick={() => dispatch(removeItem(product.id))}
                          className="border-b-black border-b"
                        >
                          Remove
                        </button>
                      </div>
                      <div
                        w-full
                        flex
                        flex-col
                        gap-2
                        justify-start
                        items-start
                        border-b
                      >
                        <p className="font-semibold">Price</p>
                        <div className="flex gap-2">
                          <p className="line-through text-gray-300">
                            {product.price}
                          </p>
                          <p>{product.discountPrice}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 py-1 border-b">
                        <div className="font-semibold">Quantity</div>
                        <div className="w-full basis-1/4 bg-gray-300 flex gap-2 px-4 justify-center items-center rounded-full py-1">
                          <p
                            onClick={() =>
                              dispatch(decreaseQuantity(product.id))
                            }
                            className="text-2xl font-bold"
                          >
                            -
                          </p>
                          <p className="text-xl font-semibold">
                            {product.quantity}
                          </p>
                          <p
                            onClick={() =>
                              dispatch(increaseQuantity(product.id))
                            }
                            className="text-xl font-bold"
                          >
                            +
                          </p>
                        </div>
                      </div>

                      <div className="basis-1/4 flex gap-2 ">
                        <p className="font-bold">Total</p>
                        <p>{product.discountPrice}</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex w-full">
              <div className="bg-gray-100 flex flex-col gap-2 h-fit w-full items-start justify-start px-3 pt-3 pb-4 rounded-md my-4">
                <div className="flex justify-between items-center w-full">
                  <h1 className="text-xl font-semibold">Total Item</h1>
                  <p className="text-xl font-bold">{totalQuantity}</p>
                </div>
                <div className="flex justify-between items-center  w-full">
                  <h1 className="text-xl font-semibold">Total Price</h1>
                  <p className="text-xl font-bold">Rs. {totalPrice}</p>
                </div>
                <div className="text-center pt-2 text-[17px] text-gray-500 w-full ">
                  <p>Taxes and shipping calculated at checkout</p>
                </div>
                <div className="text-center w-full pt-2">
                  I agree with the
                  <span>
                    <a
                      className="underline font-semibold"
                      href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/"
                    >
                      terms and conditions
                    </a>
                  </span>
                </div>
                <div className="text-center w-full bg-black py-2 rounded-full">
                  <button className="text-white font-semibold">
                    Check Out
                  </button>
                </div>
                <p className="text-center w-full pt-2">
                  Guarantee Safe Checkout
                </p>
                <div className="flex gap-2 items-center justify-center w-full">
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
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/6 mx-auto flex flex-col justify-between my-7">
            <MultipleSlider />
          </div>
          <div className="w-5/6 mx-auto flex items-center  justify-center mt-4">
            <h1 className="font-semibold text-3xl py-4">
              You may also like this.
            </h1>
          </div>
          <div className="w-5/6 mx-auto mb-4 pb-8">
            <ProductCartCard />
          </div>
        </>
      )}
    </Layout>
  );
}

export default ProductCart;
