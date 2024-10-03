import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="h-20 bg-wh-50 text-bl-50 flex justify-between items-center px-4 py-2">
      <div className="">
        <Link className='text-2xl' to="/">
          🧵 Thread
        </Link>
      </div>
      <div className="">
        <span></span>
      </div>
    </header>
  )
}
