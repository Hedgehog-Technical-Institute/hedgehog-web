import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // pretty much copied and pasted from my portfolio site, will have to make adjustments as new HTI style is further realized - Nico/tm12
    <header className="sticky top-0 w-full bg-[#f9ae0b] text-[#fdfdfd] py-3  ">
      <div className="flex justify-around max-w-7xl mx-auto px-5">
        {/* LEFT */} 
        <h1 className="text-3xl sm:text-5xl">
          <Link to="/">
            {/* Large logo for sm and above */}
            <img
              src="/logo/HTI_LOGO_FULL_NAME_OUTLINE.svg"
              alt="Hedgehog Technical Institute"
              className="hidden md:block h-25"
            />
            {/* Small logo for below sm */}
            <img
              src="/logo/HTI_ICON_FACE_WHITE.svg"
              alt="Hedgehog Technical Institute"
              className="block md:hidden h-25"
            />           
          </Link>
        </h1>

        {/* RIGHT */}
        {/* Hamburger - Mobile only */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <p className='font-bold text-lg'>X</p>  : <p className='font-bold text-lg'>MENU</p>}
        </button>

        {/* Menu - Desktop */}
        <ul className="hidden sm:flex space-x-6 font-bold">
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="https://www.hedgehogtechnicalinstitute.com/forum/">Forums</Link></li>
        </ul>
      </div>

      {/* Mobile menu - toggles open */}
      {menuOpen && (
        <nav className="sm:hidden px-5 pt-2 pb-4 bg-[#f9ae0b]">
          <ul className="flex flex-col space-y-3 font-bold text-lg">
            <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
            <li><Link to="/Community" onClick={() => setMenuOpen(false)}>Community</Link></li>
            <li><Link to="https://www.hedgehogtechnicalinstitute.com/forum/" onClick={() => setMenuOpen(false)}>Forums</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;