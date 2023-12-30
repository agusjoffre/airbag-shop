import { useState, useEffect } from 'react';

export default function useFetch(json) {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(json);
      const data = await res.json();
      setProducts(data);
    };

    fetchData();

    return () => {
      setIsLoading(false);
      setProducts();
    };
  }, []);

  return { products, isLoading };
}
