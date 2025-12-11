"use client";

import { createContext, useEffect, useState } from "react";
import { supabase2, supabase3 } from "@/Config/Supabase";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [products, setProducts] = useState();
  const [house, setHouse] = useState([]);

  const fetchHouse = async () => {
    const { data: house, error } = await supabase3.from("house").select("*");
    if (!error) {
      setHouse(house);
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

  useEffect(() => {
    fetchProducts();
    fetchHouse();
  }, []);

  return (
    <DataContext.Provider
      value={{
        products,
        house,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
