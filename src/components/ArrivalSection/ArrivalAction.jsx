import { CartIcon, DropdownIcon, SearchIcon } from "../SVG/IconSVG";
import FilteringModal from "./FilteringModal";
import SortingModal from "./SortingModal";

const ArrivalAction = ({
  onSort,
  onFilter,
  isFilterOpen,
  isSortOpen,
  toggleSort,
}) => {
  return (
    <>
      <div className="mt-10">
        <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="w-full">
            {/* Sorting */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                  onClick={onSort}
                >
                  Sort
                  <DropdownIcon />
                </button>
              </div>

              {isSortOpen && <SortingModal toggleSort={toggleSort} />}
            </div>

            {/* Filtering */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                  onClick={onFilter}
                >
                  Filter
                  <DropdownIcon />
                </button>
              </div>
              {isFilterOpen && <FilteringModal />}
            </div>
          </div>

          {/* Search */}
          <div className="flex gap-2 items-center">
            <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
              <SearchIcon />
              <input
                className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
                placeholder="Find anything..."
                type="text"
                value=""
              />
            </div>

            {/* Cart */}
            <div className="flow-root">
              <a href="#" className="group -m-2 flex items-center p-2">
                <CartIcon />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  0
                </span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArrivalAction;
