import NewsCard from "@/components/NewsCard/NewsCard";
import useStore from "@/hooks/useStore";

const Dashboard = () => {
  const { setSearch } = useStore();

  // Predefined categories for navigation
  const categories = [
    "sports",
    "politics",
    "entertainment",
    "health",
    "fitness",
  ];

  return (
    <div>
      {/* Categories Navigation */}
      <ul className="w-full flex gap-5 justify-center items-center text-center mb-7">
        {categories.map((category) => (
          <li
            key={category}
            className="underline text-xl hover:cursor-pointer"
            onClick={() => setSearch(category)}
          >
            {capitalize(category)}
          </li>
        ))}
      </ul>

      {/* News Cards */}
      <NewsCard />
    </div>
  );
};

// Helper function to capitalize the first letter of a category
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default Dashboard;
