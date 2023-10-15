import { useState, useEffect } from "react";
import Nav from "./Nav";
import TopBar from "./TopBar";

const Header = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 90;
      setIsNavFixed(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    position: isNavFixed ? "fixed" : "relative",
    top: isNavFixed ? 0 : "auto",
    transition: "top 0.6s ease-in-out",
  };

  return (
    <div className="w-full z-50">
      {isNavFixed ? <div className="h-20 w-full" /> : <TopBar />}
      <div
        style={navStyle}
        className={`text-black left-0  right-0 h-20 w-full drop-shadow-xl shadow-md items-center z-40 grid ${
          isNavFixed ? "bg-[#ffffff]" : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <Nav />
      </div>
    </div>
  );
};

export default Header;
