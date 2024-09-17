import React from "react";
import Layout from "./Layout";
import Feature from "@/components/Feature";
import Scroller from "@/components/scroller/Scroller";
import OurClient from "@/components/home/OurClient";
import ClientReviewCard from "@/components/home/ClientReviewCard";
import OurAchivements from "@/components/home/OurAchivements";
import OurProducts from "@/components/home/OurProducts";
import OurService from "@/components/home/OurService/OurService";
import Form from "@/components/home/Form";
import ProductCartCard from "@/components/scroller/ProductCartCard";
import ProductCard from "@/components/home/OurService/ProductCard";

function Home() {
  return (
    <Layout>
      <div>
        <Scroller />
      </div>

      <div className="w-full h-fit">
        <OurService />
      </div>
      <div className="w-full h-fit mb-4 pb-6">
        <ProductCard />
      </div>
      <div className="bg-pink-50 w-full h-fit ">
        <OurAchivements />
      </div>
      <div className="w-full h-fit my-5">
        <Form />
      </div>
      <div className="w-full sm:h-full h-[200px]">
        <img
          className="w-full sm:h-full h-[200px] object-center"
          src="https://www.pandit.com/cdn/shop/files/PANDIT_DOT_COM_APP_BANNER_08w_4b1d0303-332c-4802-a7ee-b14a7aa98e81.jpg?v=1715944459&width=2000"
          alt=""
        />
      </div>
      <div className="bg-pink-50 w-full h-fit ">
        <OurProducts />
      </div>
      {/* <div className="bg-gray-50 mt-6 ">
        <Feature />
      </div> */}
      <div className="w-full h-[500px] py-4">
        <ClientReviewCard />
      </div>
      <div className="bg-gray-50 w-full h-[400px] ">
        <OurClient />
      </div>
    </Layout>
  );
}

export default Home;
