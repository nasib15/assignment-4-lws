import { useFashionData } from "../../hooks/useFashionData";

const FilteringModal = ({ onFilterCategory, filterCategory }) => {
  const { fashionData: categories, loading } = useFashionData(
    "https://fakestoreapi.com/products/categories"
  );

  return (
    <div className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1" role="none">
        {loading ? (
          <p className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700">
            Loading....
          </p>
        ) : (
          categories?.map((category, index) => (
            <label
              className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
              key={index}
              id={index}
              onChange={() => {
                onFilterCategory(category);
              }}
            >
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4"
                checked={filterCategory === category}
              />
              <span className="ml-2">{category}</span>
            </label>
          ))
        )}
      </div>
    </div>
  );
};
export default FilteringModal;
