import React, { useState, useEffect, useRef } from "react";
import { BellRing, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";

export default function Navbar() {
  const notificationCount = useSelector(
    (state: RootState) => state.notification.count
  );

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleClickOutside(event: any) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NavItems = () => (
    <>
      <div className="relative bg-[#D9D9D933] p-4 rounded text-black">
        <div className="flex justify-center items-center">
          <span className="mr-2">Bell Counter</span>
          <span className="relative">
            <BellRing className="h-6 w-6" />
            {notificationCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </span>
        </div>
      </div>
      <div className="mx-auto">
        <button className="text-[#1E1E1E] hover:text-black h-[32px] mr-2 w-[152px] bg-[#E3E3E3] border border-[#767676] rounded-md">
          Sign in
        </button>
        <button className="text-[#F5F5F5] hover:text-white h-[32px] w-[152px] bg-[#2C2C2C] border border-[#2C2C2C] rounded-md">
          Register
        </button>
      </div>
    </>
  );

  return (
    <nav ref={navRef} className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1983px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/synesis-logo.png"
              alt="Synesis IT"
              className="max-h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavItems />
          </div>

          {/* Mobile Navigation Button */}
          <button
            ref={menuRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t transform transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-4 p-4">
            <NavItems />
          </div>
        </div>
      </div>
    </nav>
  );
}
