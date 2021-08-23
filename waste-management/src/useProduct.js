import { useCallback, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(
    (companyId) => {
      fetch(`/api/products?companyId=${companyId}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonResponse) => setProducts(jsonResponse));
    },
    [setProducts]
  );

  const deleteProduct = useCallback(
    (productId, companyId) => {
      fetch("/api/products/" + productId, {
        method: "DELETE",
        body: JSON.stringify(companyId),
      }).then((res) => {
        if (res.ok) {
          fetchProducts();
        }
      });
    },
    [fetchProducts]
  );

  return { products, deleteProduct, fetchProducts };
};

export default useProduct;
