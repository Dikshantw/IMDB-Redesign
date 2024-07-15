import IMDB_Logo from "../assets/IMDB_Logo_2016 1.png";
import ChevronDown from "../assets/ChevronDown.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import Bookmark from "../assets/Bookmark.svg";
import Sun from "../assets/Sun.svg";
import Profile from "../assets/Profile.svg";
import HamburgerMenu from "../assets/Compact, Mode=Dark.svg";

const Menu = () => {
  return (
    <nav className="flex h-[73px] bg-Bgnav gap-7 justify-center items-center">
      <div className="flex justify-between items-center w-full max-w-screen-2xl">
        <div className="flex gap-2 mx-3">
          <button className="lg:hidden">
            <img src={HamburgerMenu} alt="Menu" />
          </button>
          <img src={IMDB_Logo} alt="IMDB_logo" />
        </div>
        <div className="hidden lg:flex text-Tprimary">
          <button className="px-[10px] py-2">Movies</button>
          <button className="px-[10px] py-2 whitespace-nowrap">TV Shows</button>
          <button className="px-[10px] py-2">Celebs</button>
          <button className="px-[10px] py-2">Watch</button>
          <button className="px-[10px] py-2">Awards</button>
          <button className="px-[10px] py-2">Community</button>
        </div>
        <div className="hidden sm:flex justify-between items-center px-5 py-3 rounded-[10px] max-w-[529px] flex-grow  bg-Bgsecondary">
          <div className="flex text-Tprimary gap-[15px]">
            <span>All</span> <img src={ChevronDown} />
            <input
              type="text"
              name="Search"
              id="Search"
              placeholder="Search IMDb"
              className=" text-Tsecondary bg-Bgsecondary"
            />
          </div>
          <div>
            <img src={SearchIcon} alt="" />
          </div>
        </div>
        <div className="hidden lg:flex gap-1 text-Tprimary">
          <img src={Bookmark} alt="bookmark" />
          <span>Watchlist</span>
        </div>
        <div className="flex gap-2 mr-3 sm:ml-3">
          <img src={SearchIcon} alt="SearchIcon" className="sm:hidden" />

          <div className="flex gap-1 text-Tprimary">
            <img src={Profile} alt="user" />
            <span>User</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-1 text-Tprimary">
          <span>EN</span>
          <img src={ChevronDown} alt="down" />
        </div>
        <div className="hidden lg:block">
          <img src={Sun} alt="dark_mode" />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
