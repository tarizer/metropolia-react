import { useEffect, useState } from "react";

export const UserList = () => {
  // const userAPI = "https://jsonplaceholder.typicode.com/users";
  const userAPI = "https://reqres.in/api/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(userAPI)
      .then((response) => response.json())
      .then((usersData) => {
        setUsers(usersData.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <h1>Userlist</h1>
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
      <table>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
