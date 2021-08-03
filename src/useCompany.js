import { useCallback, useEffect, useState } from "react";

const useCompany = () => {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = useCallback(() => {
    fetch("/api/companies/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setCompanies(jsonResponse))
  }, [setCompanies]);

  const deleteCompany = useCallback((companyId) => {
    fetch("/api/companies/" + companyId, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          fetchCompanies();
        }
      });
  }, [fetchCompanies]);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  return { companies, deleteCompany };
};

export default useCompany;