/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);

  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
    setShowDropdown(false);
    toast.success("Successfully Logged out!");
    router.push("/");
  };

  const closeMobileMenu = () => {
    const toggle = document.getElementById("toggle_nav");
    if (toggle) toggle.checked = false;
  };

  return (
    <nav className="fixed z-50 w-full bg-transparent md:bg-transparent backdrop-blur-md shadow-sm transition-all duration-500 ease-in-out">
      <div className="container m-auto px-2 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
          />
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
            <Link
              href="/"
              aria-label="logo"
              onClick={closeMobileMenu}
              className="flex space-x-2 items-center"
            >
              <span className="text-2xl font-bold text-yellow-900">
                Tailus <span className="text-yellow-700">Feedus</span>
              </span>
            </Link>

            <div className="flex items-center lg:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="hamburger"
                id="hamburger"
                className="relative w-10 h-auto p-2"
              >
                <div className="m-auto h-0.5 w-6 rounded bg-yellow-900 transition duration-300" />
                <div className="m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 transition duration-300" />
              </label>
            </div>
          </div>

          <label
            role="button"
            htmlFor="toggle_nav"
            className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-yellow-200 bg-opacity-30 backdrop-blur backdrop-filter"
          ></label>

          <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-white lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12">
            <div className="text-gray-600 lg:pr-4 w-full">
              <ul className="tracking-wide font-medium text-sm flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full">
                <li>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="block md:hidden md:px-4 transition hover:text-yellow-700"
                  >
                    <span>Home</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/all-recipes"
                    onClick={closeMobileMenu}
                    className="block md:px-4 transition hover:text-yellow-700"
                  >
                    <span>All recipes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/add-recipes"
                    onClick={closeMobileMenu}
                    className="block md:px-4 transition hover:text-yellow-700"
                  >
                    <span>Add recipes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    onClick={closeMobileMenu}
                    className="block md:px-4 transition hover:text-yellow-700"
                  >
                    <span>Cart</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wishlist"
                    onClick={closeMobileMenu}
                    className="block md:px-4 transition hover:text-yellow-700"
                  >
                    <span>Wishlist</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full min-w-max space-y-2 lg:space-y-0 sm:w-max lg:border-l border-yellow-200 relative">
              {!user ? (
                <>
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      handleSignup();
                    }}
                    className="w-full py-3 px-6 text-center rounded-full transition hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                  >
                    <span className="block text-yellow-800 font-semibold text-sm">
                      Sign up
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      closeMobileMenu();
                      handleLogin();
                    }}
                    className="w-full py-3 px-6 text-center rounded-full transition hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                  >
                    <span className="block text-yellow-900 font-semibold text-sm">
                      Login
                    </span>
                  </button>
                </>
              ) : (
                <div className="relative flex items-center">
                  <img
                    src="https://i.pravatar.cc/40"
                    alt="profile"
                    className="w-10 h-10 rounded-full cursor-pointer border-2 border-yellow-700"
                    onClick={() => setShowDropdown(!showDropdown)}
                    ref={profileRef}
                  />

                  {showDropdown && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-14 md:right-0 bg-white border border-gray-200 rounded-md shadow-lg w-48 z-50"
                    >
                      <div className="px-4 py-2 text-gray-700 font-semibold border-b">
                        Hello, {user.name}
                      </div>
                      <button
                        onClick={() => {
                          closeMobileMenu();
                          handleLogout();
                        }}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
