export const getFilteredAndSortedData = (data, searchTerm, sortOrder) => {
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "desc") {
      return b.price - a.price;
    } else if (sortOrder === "asc") {
      return a.price - b.price;
    }
  });

  return sortedData;
};
