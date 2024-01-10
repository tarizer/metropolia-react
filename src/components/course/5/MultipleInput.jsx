import { useState } from "react";
import "./App.css";

export function MultipleInput() {
  const personInit = {
    firstname: "",
    lastname: "",
    email: "",
  };

  const [person, setPerson] = useState(personInit);

  const onChangeHandle = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    alert(`Hello ${person.firstname} ${person.lastname}`);
  };

  return (
    <>
      <h1>Contact Information</h1>
      <p>
        Name: {person.firstname} {person.lastname} Email: {person.email}
      </p>
      <form onSubmit={onSubmitHandle}>
        <input
          placeholder="First Name"
          name="firstname"
          value={person.firstname}
          onChange={onChangeHandle}
        />
        <input
          placeholder="Last Name"
          name="lastname"
          value={person.lastname}
          onChange={onChangeHandle}
        />
        <input
          placeholder="Email"
          name="email"
          value={person.email}
          onChange={onChangeHandle}
        />
        {/* <button onClick={showAlert}>Submit</button> */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
