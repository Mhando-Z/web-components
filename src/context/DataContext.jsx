"use client";

import { createContext, useEffect, useState } from "react";
import {
  supabase1,
  supabase2,
  supabase3,
  supabase4,
  supabase5,
  supabase6,
} from "@/Config/Supabase";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [products, setProducts] = useState();
  const [house, setHouse] = useState([]);
  const [news, setNews] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [foods, setFoods] = useState([]);
  const [research, setResearch] = useState([]);

  const fetchFoods = async () => {
    const { data, error } = await supabase5
      .from("foods")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setFoods(data);
  };

  const fetchHouse = async () => {
    const { data: house, error } = await supabase3.from("house").select("*");
    if (!error) {
      setHouse(house);
    }
  };

  const fetchQts = async () => {
    const { data, error } = await supabase1.from("Quotes").select("*");
    if (!error) {
      setQuotes(data);
    }
  };

  const fetNews = async () => {
    const { data, error } = await supabase4
      .from("news")
      .select("*")
      .order("created_at", { ascending: false }); // Latest first

    if (!error) {
      setNews(data);
    } else {
    }
  };

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase2
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchResearch = async () => {
    try {
      const { data, error } = await supabase6
        .from("research")
        .select("*")
        .order("created_at", { ascending: false }); // Sort by latest

      if (error) {
        throw error;
      }

      setResearch(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProducts();
    fetchHouse();
    fetNews();
    fetchQts();
    fetchFoods();
    fetchResearch();
  }, []);

  return (
    <DataContext.Provider
      value={{
        products,
        research,
        house,
        news,
        quotes,
        foods,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
