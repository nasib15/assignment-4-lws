import { useContext } from "react";
import { SearchContext } from "../contexts";

const useSearch = () => {
  const { search, setSearch } = useContext(SearchContext);
  return { search, setSearch };
};
export default useSearch;
