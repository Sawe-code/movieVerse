import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <nav className="nav">
      <h1>MovieVerse</h1>
      <ul className="items-center gap-3 hidden md:flex w-full justify-end">
        <li className="nav-link">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Favorites
          </NavLink>
        </li>
      </ul>
      <button onClick={() => setOpen(!open)}>
        <img src="/menu.svg" alt="menu-icon" className="md:hidden" />
      </button>

      {open && (
        <ul className="flex flex-col items-center top-full mt-2 left-0 z-50 md:hidden gap-3 absolute w-full p-2 border-b rounded-xl shadow-xl">
          <li className="nav-link">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "nav-link-active" : "nav-link"
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
