import { useState } from "react";

export const Trivia = () => {
  const openDB = "https://opentdb.com/api.php?amount=1";

  const [results, setResults] = useState([]);
  const onClickHandker = () => {
    fetch(openDB)
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((error) => console.error("Error: ", error));
  };
  return (
    <>
      <h1>Trivia</h1>
      <p>
        {results
          ? results[0]?.question
          : "Please wait a few secondes and try again!"}
      </p>
      <button onClick={onClickHandker}>New question</button>
    </>
  );
};
