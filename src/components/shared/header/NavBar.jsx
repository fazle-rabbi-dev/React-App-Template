import ReactDOM from "react-dom";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { useUserStore } from "@/stores";
import { nav_items } from "@/lib/constants";

const NavBar = ({ toggleMenu }) => {
  const { isLoggedIn } = useUserStore(state => ({
    isLoggedIn: state.isLoggedIn
  }));

  const handleLogout = () => {
    alert("");
  };

  return ReactDOM.createPortal(
    <div className="flex-end fixed top-0 bottom-0 left-0 right-0 min-h-screen bg-black-50/70 backdrop-blur">
      <div className="h-full w-full px-6 py-4 bg-white-50">
        <div className="flex-end">
          <button
            onClick={toggleMenu}
            className="text-2xl bg-gray-50 p-2 rounded-lg"
            type="button"
          >
            <span>
              <X />
            </span>
          </button>
        </div>

        <nav className="h-full flex flex-col items-center justify-center space-y-4">
          { isLoggedIn && <div className="p-4 text-center rounded-md bg-violet-100">
            <h3 className="font-bold text-violet-700">
              Hi, Fazle Rabbi
            </h3>
            <p className="text-violet-900">
              <span className='text-black-50 inline-block'>You are logged in as:</span>
              <span>fazlerabbi1343@gmail.com</span>
            </p>
          </div>
          }
          
          <ul className="space-y-4">
            {nav_items?.map(({ name, href, icon }) => {
              if (isLoggedIn && ["Login", "Sign Up"].includes(name)) {
                return;
              }

              return (
                <li
                  onClick={toggleMenu}
                  key={href}
                  className={cn("text-center text-xl text-black-60", {
                    "text-violet-600": name === "Sign Up"
                  })}
                >
                  {href && <Link to={href}>{name}</Link>}
                </li>
              );
            })}

            {
              isLoggedIn && (
                <li className="text-center text-xl text-rose-500 font-bold">
                  <button onClick={handleLogout} type="button">
                    Logout
                  </button>
                </li>
              )
            }
          </ul>
        </nav>
      </div>
    </div>,
    document.getElementById("nav-bar")
  );
};

export default NavBar;
