import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 justify-between items-center mx-auto px-4">
        {/* Logo/Brand */}
        <div className="flex justify-between items-end">
          <Link to="/" aria-label="Go to homepage">
            <h1 className="text-6xl font-mono ">Newzz</h1>
          </Link>
          <Link className="mx-5" to="/about" aria-label="Go to homepage">
            <h3 className="text-2xl font-mono hover:underline ">About</h3>
          </Link>
        </div>

        {/*Mode Toggle */}
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
