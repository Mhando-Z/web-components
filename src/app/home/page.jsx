"use client";

import React, { useContext } from "react";
import DataContext from "@/context/DataContext";
import MyProjects from "./MyProjects";

function page() {
  const { products, house, news } = useContext(DataContext);
  const { quotes, foods, research } = useContext(DataContext);

  const Section = ({ title, children }) => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-transparent">
        {children}
      </div>
    </section>
  );

  const Card = ({ children, className = "" }) => (
    <div
      className={`min-w-[320px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 ${className}`}
    >
      {children}
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 min-h-screen font-roboto text-white">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Project Portfolio
          </h1>
          <p className="text-gray-400 text-lg">
            Explore our innovative solutions and services
          </p>
        </div>

        {/* Posale section */}
        <Section title="Posale">
          {products && products.length > 0 ? (
            products.map((product) => (
              <Card key={product.id}>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </Card>
            ))
          ) : (
            <p className="text-gray-500 italic">No products available</p>
          )}
        </Section>

        {/* MakaziHub project section */}
        <Section title="MakaziHub">
          {house && house.length > 0 ? (
            house.map((houseItem) => (
              <Card key={houseItem.id}>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                  {houseItem.name}
                </h3>
                <p className="text-gray-400 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {houseItem.region}
                </p>
              </Card>
            ))
          ) : (
            <p className="text-gray-500 italic">No properties available</p>
          )}
        </Section>

        {/* News section */}
        <Section title="CrdbSaccoss">
          {news && news.length > 0 ? (
            news.map((newsItem) => (
              <Card key={newsItem.id}>
                <h3 className="text-xl font-semibold mb-3 text-emerald-300">
                  {newsItem.title}
                </h3>
                <p className="text-gray-400 leading-relaxed line-clamp-3">
                  {newsItem.content}
                </p>
              </Card>
            ))
          ) : (
            <p className="text-gray-500 italic">No news available</p>
          )}
        </Section>

        {/* Quotes section */}
        <Section title="Inspirational Quotes">
          {quotes && quotes.length > 0 ? (
            quotes.map((quote) => (
              <Card
                key={quote.id}
                className="bg-gradient-to-br from-purple-900/30 to-slate-900/50"
              >
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-purple-400 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg font-medium mb-4 line-clamp-4 leading-relaxed text-gray-200">
                  {quote.quote}
                </p>
                <p className="text-purple-400 font-semibold">
                  — {quote.author}
                </p>
              </Card>
            ))
          ) : (
            <p className="text-gray-500 italic">No quotes available</p>
          )}
        </Section>

        {/* Foods section */}
        <Section title="Foods">
          {foods && foods.length > 0 ? (
            foods.map((food) => (
              <Card key={food.id}>
                <h3 className="text-xl font-semibold mb-3 text-orange-300">
                  {food.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {food.description}
                </p>
              </Card>
            ))
          ) : (
            <p className="text-gray-500 italic">No foods available</p>
          )}
        </Section>

        {/* Research section */}
        <Section title="Hattz Project">
          {research && research.length > 0 ? (
            research.map((researchItem) => (
              <Card key={researchItem.id}>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-pink-300">
                  {researchItem.title}
                </h3>
                <p className="text-gray-400 leading-relaxed line-clamp-4">
                  {researchItem.description}
                </p>
              </Card>
            ))
          ) : (
            <p className="text-gray-500 italic">No research available</p>
          )}
        </Section>
      </div>
      {/* My projects */}
      <div>
        <MyProjects />
      </div>
    </div>
  );
}

export default page;
