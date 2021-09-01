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

  const loginUser = useCallback((name, password, props) => {
    fetch("/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    }).then((res) => {
      if (res.ok) {
        props.history.push("/Mainpage");
      } else {
        alert("user or pass is not correct");
      }
    });
  }, []);

  const logoutUser = useCallback((props) => {
    fetch("/api/logout/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        props.history.push("/credential");
      }
    });
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { addUser, loginUser, logoutUser };
};

export default useUsers;
