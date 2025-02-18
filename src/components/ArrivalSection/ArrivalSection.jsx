import { useState } from "react";
import { toast } from "react-toastify";
import useDebounce from "../../hooks/useDebounce";
import { useFashionData } from "../../hooks/useFashionData";
import useSearch from "../../hooks/useSearch";
import ArrivalAction from "./ArrivalAction";
import ArrivalCard from "./ArrivalCard";
import LoadingSkeleton from "./LoadingSkeleton";

const ArrivalSection = () => {
  const [sortOrder, setSortOrder] = useState(null);
  const [filterCategory, setFilterCategory] = useState(null);
  const { search, setSearch } = useSearch();

  // fetching data
  const { fashionData, loading, error } = useFashionData(
    "https://fakestoreapi.com/products"
  );

  // fetching category data
  const { fashionData: categoryData, loading: loadingCategory } =
    useFashionData(
      `https://fakestoreapi.com/products/category/${filterCategory}`
    );

  // filtering category
  const handleFilterCategory = (category) => {
    setFilterCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  // search
  const handleSearch = (search) => {
    console.log(search.replace(/\s+/g, " ").trim());
    debounceSearch(search.replace(/\s+/g, " ").trim()); // Remove extra spaces
  };

  // search debounce
  const debounceSearch = useDebounce((search) => {
    setSearch(search);
  }, 700);

  // sorting
  const toggleSort = (sortType) => {
    if (sortType === "desc") {
      setSortOrder("desc");
    } else if (sortType === "asc") {
      setSortOrder("asc");
    } else {
      setSortOrder(null);
    }
  };

  // error handling
  if (error) {
    toast.error(error?.message, {
      position: "top-center",
    });
  }

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
          toggleSort={toggleSort}
          onFilterCategory={handleFilterCategory}
          filterCategory={filterCategory}
          onSearch={handleSearch}
        />

        {/* Arrival Card Section */}
        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid gri grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {/* Showing loading splash screen till fetching data */}
                {loading || loadingCategory ? (
                  <>
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                  </>
                ) : // Displaying data based on filter category along with search and sort
                filterCategory ? (
                  (categoryData?.filter((data) =>
                    data.title.toLowerCase().includes(search.toLowerCase())
                  )?.length === 0 && (
                    <p className="col-span-full text-3xl font-bold text-center">
                      No Products Found
                    </p>
                  )) ||
                  categoryData
                    ?.filter((data) =>
                      data.title.toLowerCase().includes(search.toLowerCase())
                    )
                    ?.sort((a, b) => {
                      if (sortOrder === "desc") {
                        return b.price - a.price;
                      } else if (sortOrder === "asc") {
                        return a.price - b.price;
                      } else {
                        return categoryData;
                      }
                    })
                    .map((data) => <ArrivalCard key={data.id} product={data} />)
                ) : (
                  // Displaying all data along with search and sort
                  (fashionData?.filter((data) =>
                    data.title.toLowerCase().includes(search.toLowerCase())
                  )?.length === 0 && (
                    <p className="col-span-full text-3xl font-bold text-center">
                      No Products Found
                    </p>
                  )) ||
                  fashionData
                    ?.filter((data) =>
                      data.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .sort((a, b) => {
                      if (sortOrder === "desc") {
                        return b.price - a.price;
                      } else if (sortOrder === "asc") {
                        return a.price - b.price;
                      } else {
                        return fashionData;
                      }
                    })
                    ?.map((data) => (
                      <ArrivalCard key={data.id} product={data} />
                    ))
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
