import React from "react";
import { hamburger } from "../../assets/icons";
import { headerLogo } from "../../assets/images";
import { navLinks } from "../../constants/index";
const NavBar = () => (
  <header className="padding-x py-8 absolute z-50 w-full">
    <nav className="flex justify-between max-container">
      <a href="/">
        <img src={headerLogo} alt="Red Nike Logo" width={130} height={29} />
      </a>
      <ul
        id="sideNav"
        className="nav max-lg:translate-x-full translate-x-0 max-lg:min-h-screen"
      >
        {navLinks.map((link, key) => (
          <li key={key}>
            <a
              className="font-montserrat leading-normal text-lg text-slate-gray max-lg:text-black border-b-2 border-transparent hover:max-lg:border-white hover:border-coral-red transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div
        onClick={() => {
          if (
            document
              .getElementById("sideNav")
              .classList.contains("max-lg:translate-x-full")
          ) {
            document
              .getElementById("sideNav")
              .classList.remove("max-lg:translate-x-full");
            document
              .getElementById("menu-image").src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjU2IDI1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8bWV0YWRhdGE+IFN2ZyBWZWN0b3IgSWNvbnMgOiBodHRwOi8vd3d3Lm9ubGluZXdlYmZvbnRzLmNvbS9pY29uIDwvbWV0YWRhdGE+DQo8Zz48Zz48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTU2LjIsMTI3bDg0LjEsODQuNWM3LjYsNy43LDcuNiwyMC4xLDAsMjcuOGMtNy42LDcuNy0yMCw3LjctMjcuNiwwbC04NC4xLTg0LjVsLTg0LjksODUuM2MtNy43LDcuOC0yMC4yLDcuOC0yNy45LDBjLTcuNy03LjctNy43LTIwLjMsMC0yOGw4NC45LTg1LjRMMTkuMiw0NC44Yy03LjYtNy43LTcuNi0yMC4xLDAtMjcuOGM3LjYtNy43LDIwLTcuNywyNy42LDBMMTI4LjMsOTlMMjExLDE1LjljNy43LTcuNywyMC4yLTcuNywyNy45LDBjNy43LDcuOCw3LjcsMjAuMywwLDI4TDE1Ni4yLDEyN3oiLz48L2c+PC9nPg0KPC9zdmc+"
            document
              .getElementById("sideNav")
              .classList.add("max-lg:translate-x-0");
          } else if (
            document
              .getElementById("sideNav")
              .classList.contains("max-lg:translate-x-0")
          ) {
            document
              .getElementById("sideNav")
              .classList.remove("max-lg:translate-x-0");
            document
              .getElementById("sideNav")
              .classList.add("max-lg:translate-x-full");
              document
              .getElementById("menu-image").src = hamburger
          }
        }}
        className="max-lg:block hidden cursor-pointer"
      >
        <img id="menu-image" src={hamburger} alt="hamburger" width={25} height={25} />
      </div>
    </nav>
  </header>
);

export default NavBar;
