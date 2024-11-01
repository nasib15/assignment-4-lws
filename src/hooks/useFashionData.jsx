import { useEffect, useState } from "react";

export const useFashionData = (url) => {
  const [fashionData, setFashionData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const fetchData = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          const errorMessage = `Fetching weather data failed: ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();

        if (!ignore) {
          setFashionData(data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(url);

    return () => {
      ignore = true;
    };
  }, [url]);

  return {
    fashionData,
    loading,
    error,
  };
};
