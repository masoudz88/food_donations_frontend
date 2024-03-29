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
    (companyId, productId) => {
      fetch(`/api/products/ ${companyId}  / ${productId} `, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          fetchProducts(companyId);
        }
      });
    },
    [fetchProducts]
  );
  const addProduct = useCallback(
    (name, companyId) => {
      fetch("/api/products/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, companyId }),
      }).then((res) => {
        if (res.ok) {
          fetchProducts(companyId);
        }
      });
    },
    [fetchProducts]
  );

  return { products, deleteProduct, fetchProducts, addProduct };
};

export default useProduct;
