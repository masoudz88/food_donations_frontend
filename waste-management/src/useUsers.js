import { useCallback, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

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
      fetch("/api/signup/", {
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

  const loginUser = useCallback((name, password) => {
    fetch("/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    }).then((res) => {
      if (res.ok) {
        <Redirect to={{ pathname: "/Mainpage" }} />;
      }
    });
  }, []);

  const logoutUser = useCallback(() => {
    fetch("/api/logout/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        <Redirect to={{ pathname: "/credential" }} />;
      }
    });
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, addUser, loginUser, logoutUser };
};

export default useUsers;
