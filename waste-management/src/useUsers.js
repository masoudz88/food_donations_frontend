import { useCallback, useEffect } from "react";

const useUsers = ({ setName, setIsLogged }) => {
  /*
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
  */

  const addUser = useCallback(
    (name, password) => {
      fetch("/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      }).then((res) => {
        if (res.ok) {
          // fetchUsers();
        }
      });
    },
    []
  );

  const loginUser = useCallback((name, password, props) => {
    fetch("/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setName(data.name);
          setIsLogged(true);
          props.history.push("/Mainpage");
        });
      } else {
        alert("user or pass is not correct");
      }
    });
  }, [setIsLogged, setName]);

  const logoutUser = useCallback((props) => {
    fetch("/api/logout/", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        setName(undefined);
        setIsLogged(false);
        props.history.push("/credential");
      }
    });
  }, [setIsLogged, setName]);

  const whoami = useCallback((props) => {
    fetch("/api/whoami/", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setName(data.name);
          setIsLogged(true);
        });
      } else {
        setName(undefined);
        setIsLogged(false);
      }
    });
  }, [setIsLogged, setName]);

  useEffect(() => {
    whoami();
  }, [whoami]);

  return { addUser, loginUser, logoutUser };
};

export default useUsers;
