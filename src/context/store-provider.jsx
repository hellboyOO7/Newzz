import React, { createContext, useEffect, useState, useCallback } from "react";

// Create the context
export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const API_KEY = import.meta.env.VITE_NEWZ_API_KEY;

  // States
  const [search, setSearch] = useState("india");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  // Fetch data function (memoized for stability)
  const getData = useCallback(async () => {
    setIsLoading(true);
    setError(null); // Reset error before fetching

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apikey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setArticles(data.articles || []); // Safely handle data
    } catch (err) {
      setError("Failed to fetch news. Please try again later."); // User-friendly error message
      console.error("API Error:", err); // Log the actual error for debugging
    } finally {
      setIsLoading(false);
    }
  }, [search, API_KEY]);

  // Effect for fetching data
  useEffect(() => {
    getData();
  }, [getData]);

  // Memoized context value for better performance
  const contextValue = React.useMemo(
    () => ({ articles, setSearch, isLoading, error }),
    [articles, setSearch, isLoading, error]
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
