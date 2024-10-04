import { Link } from "react-router-dom";
import { useUserStore } from "@/stores";

export const Header = () => {
  const isLoggedIn = useUserStore(state => state.isLoggedIn);
  const logout = useUserStore(state => state.logout);

  return (
    <header className="h-20 bg-wh-50 text-bl-50 flex justify-between items-center px-4 py-2">
      <div className="">
        <Link
          className="text-2xl"
          to="/"
        >
          🧵 Thread
        </Link>
      </div>
      <div className="">
        {isLoggedIn ? (
          <button onClick={logout} type="button">Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};
