import { useState } from "react";

export const UserInfo = () => {
  const userAPI = "https://reqres.in/api/users/";
  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState("");
  const [error, setError] = useState(false);

  const onChangeHandler = (e) => {
    setUserId(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(userAPI + userId)
      .then((response) => response.json())
      .then((usersData) => {
        if (usersData.data) {
          setUser(usersData.data);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h1>User Info</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          name="userID"
          placeholder="User ID"
          type="text"
          onChange={onChangeHandler}
        />
        <button type="submit">Fetch</button>
      </form>
      <p>
        {error
          ? "User not found"
          : !Array.isArray(user) && // API returns an array if user is not found or if the user ID is not provided
            `${user.first_name} ${user.last_name} (${user.email})`}
      </p>
    </>
  );
};

{
  /* {console.log(userId)}
  {console.log(user)} */
  /* <pre>{JSON.stringify(users, null, 2)}</pre> */
  // userId &&
  // user !== "undefined" &&
  /* {console.log(user.first_name)} */
}
