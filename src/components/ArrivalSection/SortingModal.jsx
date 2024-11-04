const SortingModal = ({ toggleSort }) => {
  return (
    <div className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div>
        <span
          className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
          role="menuitem"
          onClick={() => toggleSort("asc")}
        >
          Low to High
        </span>
        <span
          href=""
          className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
          role="menuitem"
          onClick={() => toggleSort("desc")}
        >
          High to Low
        </span>
        <div className="border-t border-gray-200">
          <button
            className="w-full text-red-500 text-xs font-semibold p-3 rounded-b-md
              hover:bg-red-100 active:bg-red-200 transition-all duration-150 focus:outline-none"
            onClick={() => toggleSort(null)}
          >
            Reset Sorting
          </button>
        </div>
      </div>
    </div>
  );
};
export default SortingModal;
