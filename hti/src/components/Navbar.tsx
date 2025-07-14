import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // pretty much copied and pasted from my portfolio site, will have to make adjustments as new HTI style is further realized - Nico/tm12
    <nav className="sticky top-0 w-full bg-[#f9ae0b] text-[#fdfdfd] h-[7rem] z-50">
     <div className="flex items-center h-full w-full mx-auto px-5">
        {/* LEFT */} 
        <div className="ml-[3rem] transition-transform duration-200 hover:scale-105">
          <h1>
            <Link to="/">
              <img
                src="/hti_full_min.svg"
                alt="Hedgehog Technical Institute"
                className="hidden md:block h-[5rem]"
              />
              <img
                src="/hti_txt_min.svg"
                alt="HTI Icon"
                className="block md:hidden h-[5rem]"
              />
            </Link>
          </h1>
        </div>
        {/*  SPACER  */}
        <div className="flex-grow"></div>

        {/* RIGHT */}
        {/* Hamburger - Mobile only */}
        <div className="mr-[3rem]">
          <button
            className="sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <p className='font-bold text-xl'>X</p>  : <p className='font-bold text-xl'>MENU</p>}
          </button>

          {/* Menu - Desktop */}
          <ul className="hidden sm:flex space-x-6 font-bold text-2xl font-hti font">
            {/* <li className="transition-transform duration-200 hover:scale-105 font-spacegrotesk"><Link to="/events">EVENTS</Link></li> */}
            {/* <li className="transition-transform duration-200 hover:scale-105"><Link to="/community">COMMUNITY</Link></li> */}
            {/* https://discord.gg/PctwSxXDkx */}
            <li className="transition-transform duration-200 hover:scale-105"><Link to="https://discord.gg/PctwSxXDkx">DISCORD</Link></li>
            <li className="transition-transform duration-200 hover:scale-105"><Link to="https://hedgehogtechnicalinstitute.com/forum/">FORUMS</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile menu - toggles open */}
      {menuOpen && (
        <nav className="sm:hidden px-5 pt-2 pb-4 bg-[#f9ae0b]">
          <ul className="flex flex-col space-y-3 font-bold text-lg">
            {/* <li><Link to="/events" onClick={() => setMenuOpen(false)}>EVENTS</Link></li> */}
            {/* <li><Link to="/Community" onClick={() => setMenuOpen(false)}>COMMUNITY</Link></li> */}
            <li><Link to="https://discord.gg/PctwSxXDkx" onClick={() => setMenuOpen(false)}>DISCORD</Link></li>
            <li><Link to="https://www.hedgehogtechnicalinstitute.com/forum/" onClick={() => setMenuOpen(false)}>FORUMS</Link></li>
          </ul>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;