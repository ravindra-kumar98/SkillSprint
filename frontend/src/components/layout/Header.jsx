import React from "react";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../routes/publicRoutes";
import { PrimaryButton, SecondaryButton } from "../ui/Buttons";
import ThemeToggle from "../ui/ThemeToggle";
const Header = () => {
  const leftLink = publicRoutes.filter(
    (route) => !route.auth && route.path !== "/" && !route.path.includes(":")
  );
  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="pe-4">
            <Link to={"/"} className="font-extrabold text-2xl text-green">
              SkillSprint
            </Link>
          </div>
          <ul className="flex items-center justify-between">
            {leftLink.map((route) => (
              <li key={route.path} className="text-sm font-medium">
                <Link
                  to={route.path}
                  className="px-2 py-1 text-dark hover:text-green"
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex items-center justify-between">
            <li className="mx-2">
              <ThemeToggle />
            </li>
            <li className="mx-2">
              <PrimaryButton>Log In</PrimaryButton>
            </li>
            <li className="mx-2">
              <SecondaryButton>Register</SecondaryButton>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
