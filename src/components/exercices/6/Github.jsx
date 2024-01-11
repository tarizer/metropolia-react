import { useEffect, useState } from "react";

export const Github = () => {
  const reactRepos = "https://api.github.com/search/repositories?q=react";
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch(reactRepos)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.items);
        setisLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  }, []);

  return (
    <>
      <h1>Github React Repositories</h1>

      {isLoading && "Loading..."}

      <table>
        <thead style={{ fontWeight: "700" }}>
          <tr>
            <td>Name</td>
            <td>Url</td>
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
    </>
  );
};
