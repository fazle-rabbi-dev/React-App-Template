import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search, Plus } from "lucide-react";

const categoriesData = [
  {
    name: "Technology",
    slug: "technology",
    icon: "💻"
  },
  {
    name: "Health",
    slug: "health",
    icon: "💪"
  },
  {
    name: "Programming",
    slug: "programming",
    icon: "👨‍💻"
  },
  {
    name: "Free courses",
    slug: "free-courses",
    icon: "🎓"
  }
];


export const Category = () => {
  const [filter, setFilter] = useState("");
  // const [categories, setCategories] = useState(categoriesData);

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const filteredCategories = categoriesData.filter(category =>
    category.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="mt-10">
      <h2 className="heading2">Categories</h2>
      <span className="text-black-70">Total: {filteredCategories.length}</span>

      <div className="my-4 flex-between gap-2">
        <div className="flex-1 flex items-center h-10 px-2 bg-transparent border-[1px] border-gray-50 rounded-md">
          <span className="">
            <Search size={20} color="#ababab" />
          </span>
          <input
            className="flex-1 h-full px-2 bg-transparent border-none outline-0"
            placeholder="Filter category"
            type="text"
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      <ul className="flex flex-col justify-center space-y-2">
        {filteredCategories.map(category => {
          return <ListItem key={category.name} category={category} />;
        })}
      </ul>
    </section>
  );
};

const ListItem = ({ category: { icon, name, slug } }) => {
  return (
    <li className="h-10 bg-white-60 rounded-md">
      <Link
        className="flex items-center h-full w-full gap-1 px-2"
        to={`/resources/categories/${slug}`}
      >
        <span>{icon}</span>
        {name}
      </Link>
    </li>
  );
};
