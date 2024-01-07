function AgeCheck() {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const age = e.target.elements.age.value;

    if (age >= 18) alert("Hello " + name);
    else alert("You are too young");
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Name" name="name" />
        <input type="number" placeholder="Age" name="age" />
        <button type="submit">Check age</button>
      </form>
    </>
  );
}

export default AgeCheck;
