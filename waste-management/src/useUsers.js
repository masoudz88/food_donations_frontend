import { useCallback, useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(() => {
    fetch("/api/users/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setUsers(jsonResponse));
  }, [setUsers]);

  const addUser = useCallback(
    (name, password) => {
      fetch("/api/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      }).then((res) => {
        if (res.ok) {
          fetchUsers();
        }
      });
    },
    [fetchUsers]
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, addUser, fetchUsers };
};

export default useUsers;
