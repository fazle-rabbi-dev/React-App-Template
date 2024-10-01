import { useState } from "react";
import { AlignJustify, Moon, Sun, Search } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import NavBar from "./NavBar.jsx"
import SearchBar from "./SearchBar.jsx"
import { useThemeStore } from "@/stores"

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  
  const { isOnDarkTheme, toggleTheme } = useThemeStore(state => state);
  
  const toggleMenu = () => {
    console.log("clicked")
    console.log({ openMenu })
    
    setOpenMenu(curr => {
      if (!curr) {
        // document.body.style.overflow = "hidden";
      } else {
        // document.body.style.overflow = "auto";
      }
      return !curr;
    });
  };
  
  const toggleSearchBar = () => {
    setDisplaySearchBar(currValue => !currValue);
  }
  
  return (
    <header className="fixed top-0 bottom-0 left-0 right-0 h-16 px-6 flex-between bg-white-50/70 backdrop-blur dark:bg-black-50/90">
      <p className="font-author text-2xl tracking-wide text-gradient-violet">
        <Link to="/">🌐 ORN</Link>
      </p>

      <div className={cn("space-x-3", { "text-white-50": isOnDarkTheme })}>
        <button onClick={toggleSearchBar}>
          <Search />
        </button>
        <button onClick={toggleTheme}>
          {isOnDarkTheme ? <Sun /> : <Moon />}
        </button>
        <button onClick={toggleMenu}>
          <AlignJustify />
        </button>
      </div>
      
      {openMenu && <NavBar toggleMenu={toggleMenu} />}
      {displaySearchBar && <SearchBar toggleSearchBar={toggleSearchBar} />}
    </header>
  );
};

