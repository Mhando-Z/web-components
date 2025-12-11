"use client";

import React, { useContext } from "react";
import DataContext from "@/context/DataContext";

function page() {
  const { products, house, news } = useContext(DataContext);
  const { quotes } = useContext(DataContext);
  return (
    <div className="bg-linear-to-b font-roboto text-white min-h-screen from-slate-900 via-blue-950 to-blue-950">
      <div className="md:mt-20 container flex flex-col gap-5 mx-auto ">
        {/* Posale section */}
        <div>
          <h1 className="font-bold text-4xl ">Posale section</h1>
          <div className="flex flex-row overflow-x-scroll">
            {products &&
              products?.map((product) => (
                <div key={product.id} className="border-b border-gray-700 p-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-400">{product.description}</p>
                </div>
              ))}
          </div>
        </div>
        {/* Makazihub project section */}
        <div className="mt-2">
          <h1 className="font-bold text-4xl ">MakaziHub section</h1>
          <div className="flex flex-row overflow-x-scroll">
            {house &&
              house?.map((house) => (
                <div key={house.id} className="border-b border-gray-700 p-4">
                  <h2 className="text-lg font-semibold">{house.name}</h2>
                  <p className="text-gray-400">{house.region}</p>
                </div>
              ))}
          </div>
        </div>
        {/* News section */}
        <div className="mt-2">
          <h1 className="font-bold text-4xl ">CrdbSaccoss section</h1>
          <div className="flex flex-row overflow-x-scroll">
            {news &&
              news?.map((newsItem) => (
                <div key={newsItem.id} className="border-b border-gray-700 p-4">
                  <h2 className="text-lg font-semibold">{newsItem.title}</h2>
                  <p className="text-gray-400">{newsItem.content}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
