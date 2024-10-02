import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="h-20 bg-wh-50 text-bl-50 flex justify-between items-center px-4 py-2">
      <div className="">
        <Link to="/">
          🏕️ Home
        </Link>
      </div>
      <div className="">
        <span>Threads</span>
      </div>
    </header>
  )
}
