import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";


const SearchBar = ({ toggleSearchBar }) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = e => {
    e.preventDefault();

    if(!searchText?.trim()) return;
    
    toggleSearchBar();
    navigate(`/resources/search?keyword=${searchText}`)
  };

  return ReactDOM.createPortal(
    <div className="h-32 flex-center px-6 fixed top-0 right-0 left-0 bg-white-50/90 backdrop-blur">
      <form
        onSubmit={handleSearch}
        className="w-full"
      >
        <input
          className="flex-1 form-input bg-white-50"
          type="text"
          value={searchText}
          placeholder="Type keyword to search.."
          onChange={e => setSearchText(e.target.value)}
        />

        <div className="flex-end gap-3">
          <button
            onClick={toggleSearchBar}
            className="mt-2 bg-black-50 rounded-md text-white-50 p-2"
            type="button"
          >
            Cancel
          </button>

          <button
            className="mt-2 bg-violet-500 rounded-md text-white-50 p-2"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("global-search-bar")
  );
};

export default SearchBar;
