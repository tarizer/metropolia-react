import { useState } from "react";
import "./App.css";

function UserRegistration() {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  };

  const [user, setUser] = useState(initialState);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Validate that all fields are filled
    if (Object.values(user).some((item) => item === ""))
      alert("All fields are required");
    else alert(`Welcome ${user.firstname} ${user.lastname}`);
  };

  const onChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>User Registration</h2>
      <form className="userRegistration" onSubmit={onSubmitHandler}>
        <input
          name="firstname"
          placeholder="First name"
          value={user.firstname}
          onChange={onChangeHandler}
        />
        <input
          name="lastname"
          placeholder="Last name"
          value={user.lastname}
          onChange={onChangeHandler}
        />
        <input
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={onChangeHandler}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={user.phone}
          onChange={onChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UserRegistration;
