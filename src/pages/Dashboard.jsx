import NewsCard from "@/components/NewsCard/NewsCard";
import useStore from "@/hooks/useStore";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

const Dashboard = () => {
  const { setSearch, isLoading } = useStore();

  // Predefined categories for navigation
  const categories = [
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Categories Navigation */}
      <ul className="w-full flex gap-5 justify-center items-center text-center mb-7 flex-wrap ">
        {categories.map((category) => (
          <li
            key={category}
            className=" text-xl hover:cursor-pointer hover:underline"
            onClick={() => setSearch(category)}
          >
            {capitalize(category)}
          </li>
        ))}
      </ul>
      {/* News Cards */}
      {isLoading ? <ProgressBar /> : <NewsCard />}
    </div>
  );
};

// Helper function to capitalize the first letter of a category
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default Dashboard;
