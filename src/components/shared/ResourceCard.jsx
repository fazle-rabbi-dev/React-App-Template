import { Link } from "react-router-dom";
import { ExternalLink, CalendarDays } from "lucide-react";


export const ResourceCard = ({ item }) => {
  return (
    <li className="bg-white-50 rounded-2xl p-4 shadow-md">
      {/* Card Header */}
      <div className="">
        <div className="flex justify-between items-center">
          <p className="inline-block px-3 py-1 rounded-lg bg-gradient-violet text-white-50 text-white">
            Technology
          </p>
          <img
            className="w-8 h-8 rounded-full"
            src={`https://randomuser.me/api/portraits/men/${item.id}.jpg`}
            alt="user-avatar"
          />
        </div>
  
        <h2 className="mt-3 text-xl font-semibold text-black-70">
          {item.title}
        </h2>
      </div>
      
      {/* Card Metadata */}
      <div className="my-2 space-y-2">
        <p className="flex items-center gap-2 text-gray-500">
          <span className="text-sm">#technology</span>
          <span className="text-sm">#coding</span>
          <span className="text-sm">#react</span>
        </p>
        
        <div className="flex items-center gap-2 text-gray-600">
          <CalendarDays size={18} />
          <p className="text-sm">Sept 6, 24</p>
        </div>
      </div>
      
      {/* External Link */}
      <div className="mt-4 flex justify-between items-center">
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 hover:underline"
        >
          https://react.dev
        </a>
        <Link
          to=""
          target="_blank"
          className="bg-gray-100 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-200"
        >
          <ExternalLink />
        </Link>
      </div>
    </li>
  );
};
