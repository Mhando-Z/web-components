"use client";

import { createContext, useEffect, useState } from "react";
import { supabase2 } from "@/Config/Supabase";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [products, setProducts] = useState();

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
  }, []);

  return (
    <DataContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
