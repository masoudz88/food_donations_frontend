import { useCallback, useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(() => {
    fetch("/api/products/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setProducts(jsonResponse));
  }, [setProducts]);

  const deleteProduct = useCallback(
    (productId) => {
      fetch("/api/companies/" + productId, { method: "DELETE" }).then((res) => {
        if (res.ok) {
          fetchProducts();
        }
      });
    },
    [fetchProducts]
  );
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, deleteProduct };
};

export default useProduct;
