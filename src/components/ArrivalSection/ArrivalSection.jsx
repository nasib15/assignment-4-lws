import { useState } from "react";
import { useFashionData } from "../../hooks/useFashionData";
import ArrivalAction from "./ArrivalAction";
import ArrivalCard from "./ArrivalCard";
import LoadingSkeleton from "./LoadingSkeleton";

const ArrivalSection = () => {
  const { fashionData, loading } = useFashionData(
    "https://fakestoreapi.com/products"
  );

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sortOrder, setSortOrder] = useState(null);

  const handleSortOpen = () => {
    setIsSortOpen(!isSortOpen);
    setIsFilterOpen(false);
  };

  const handleFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsSortOpen(false);
  };

  const toggleSort = (sortType) => {
    if (sortType === "desc") {
      setSortOrder("desc");
    }
    if (sortType === "asc") {
      setSortOrder("asc");
    }
  };

  const datas = fashionData?.sort((a, b) => {
    if (sortOrder === "desc") {
      return b.price - a.price;
    } else if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return fashionData;
    }
  });

  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            New Arrivals
          </h1>
          <p className="mt-4 text-xl text-gray-500 text-center">
            Thoughtfully designed objects for the workspace, home, and travel.
          </p>
        </div>

        {/* Sorting, Filtering and Searching Section */}
        <ArrivalAction
          onSort={handleSortOpen}
          onFilter={handleFilterOpen}
          isSortOpen={isSortOpen}
          isFilterOpen={isFilterOpen}
          toggleSort={toggleSort}
        />

        {/* Arrival Card Section */}
        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {loading ? (
                  <>
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                  </>
                ) : (
                  datas?.map((data) => <ArrivalCard key={data.id} {...data} />)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArrivalSection;
