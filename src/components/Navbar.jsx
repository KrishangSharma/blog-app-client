// Packages Import
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-100 h-22 p-5 bg-background text-text flex items-center justify-between md:h-20 border-b border-secondary">
      <div className="flex flex-col items-center justify-center w-full gap-1 md:flex-row md:w-auto ">
        {/* Logo */}
        <h2 className="text-2xl font-semibold">
          <NavLink to="/">
            <span className="text-primary">
              Krishang Sharma
              <span className="text-accent text-sm">/Blogs</span>{" "}
            </span>{" "}
          </NavLink>
        </h2>

        {/* Divider */}
        <hr className="hidden divider mx-5 bg-primary md:block " />

        {/* Nav Links */}
        <div className="flex items-center gap-10 text-s ">
          <NavLink
            to="https://krishangsharma.vercel.app/"
            className="hover:text-accent transition duration-200 ease-in-out"
          >
            {" "}
            Portfolio{" "}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
