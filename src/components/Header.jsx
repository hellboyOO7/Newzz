import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { IoSearch } from "react-icons/io5";
import { Button } from "./ui/button";
import useStore from "@/hooks/useStore";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const { setSearch } = useStore();

  // Handle the search action
  const handleSearch = () => {
    if (searchValue.trim()) {
      setSearch(searchValue.trim());
      setSearchValue(""); // Clear the input field after searching
    }
  };

  // Handle "Enter" key for search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 justify-between items-center mx-auto px-4">
        {/* Logo/Brand */}
        <Link to="/" aria-label="Go to homepage">
          <h1 className="text-6xl font-mono">Newzz</h1>
        </Link>

        {/* Search Bar and Mode Toggle */}
        <div className="flex items-center">
          <ModeToggle />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
            className="py-4 px-3 h-9 w-40 rounded-s-md border border-input bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Search input"
          />
          <Button
            className="rounded-e-md rounded-s-none"
            onClick={handleSearch}
            aria-label="Search button"
          >
            <IoSearch />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
