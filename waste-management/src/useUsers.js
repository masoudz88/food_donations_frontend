import { useCallback, useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  const fetchUsers = useCallback(() => {
    fetch("/api/users/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setUsers(jsonResponse));
  }, [setUsers]);

  const fetchCurrentUsers = useCallback((name) => {
    fetch(`/api/users/${name}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => setCurrentUser(jsonResponse));
  }, [setCurrentUser]);

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
        fetchCurrentUsers(name);
        props.history.push("/Mainpage");
      } else {
        alert("user or pass is not correct");
      }
    });
  }, [fetchCurrentUsers]);

  const logoutUser = useCallback((props) => {
    fetch("/api/logout/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        props.history.push("/");
      }
    });
  }, []);

  const whoAmI = useCallback(
    (props) => {
      fetch("/api/whoami/")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonResponse) => setCurrentUser(jsonResponse));
    },
    [setCurrentUser]
  );

  useEffect(() => {
    fetchUsers();
    fetchCurrentUsers();
  }, [fetchUsers, fetchCurrentUsers]);

  return { addUser, loginUser, logoutUser,  whoAmI };
};

export default useUsers;
