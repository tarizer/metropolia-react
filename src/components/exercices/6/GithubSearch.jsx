import { useState } from "react";

export const GithubSearch = () => {
  const apiUrl = "https://api.github.com/search/repositories?q=";
  const [repositories, setRepositories] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(apiUrl + search)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.items);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  };

  return (
    <>
      <h1>Search Github Repositories</h1>
      <form
        onSubmit={onSubmitHandler}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <input type="text" onChange={onChangeHandler} />
        <button>Search</button>
      </form>

      {isLoading && "Loading..."}
      {!!repositories?.length && (
        <table>
          <thead style={{ fontWeight: "700" }}>
            <tr>
              <td>Name</td>
              <td>URL</td>
            </tr>
          </thead>
          <tbody>
            {repositories.map((repository) => (
              <tr key={repository.id}>
                <td>{repository.full_name}</td>
                <td>
                  <a href={repository.html_url}>{repository.html_url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
