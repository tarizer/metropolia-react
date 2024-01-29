import { Link, Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>
          <Link className="link" to={`metropolia-react`}>
            React Fundamentals
          </Link>
        </h1>
        <div>
          <Link className="link" to={`metropolia-react`}>
            Metropolia
          </Link>
        </div>

        <nav>
          <details>
            <summary>4. Props & State</summary>
            <ul>
              <li>
                <Link to={`metropolia-react/exercices/react-counter`}>
                  Counter
                </Link>
              </li>
              <li>
                <Link to={`metropolia-react/exercices/conditional-rendering`}>
                  Conditional rendering
                </Link>
              </li>
              <li>
                <Link to={`metropolia-react/exercices/change-color`}>
                  Change color
                </Link>
              </li>
            </ul>
          </details>

          <details>
            <summary>5. Reading User Input</summary>
            <ul>
              <li>
                <Link to={`metropolia-react/course/multiple-imput`}>
                  Multiple imput
                </Link>
              </li>
              <li>
                <Link to={`metropolia-react/course/todo`}>Todo list</Link>
              </li>

              <li>
                <Link to={`metropolia-react/exercices/age-check`}>
                  Age check
                </Link>
              </li>
              <li>
                <Link to={`metropolia-react/exercices/calculator`}>
                  Calculator
                </Link>
              </li>
              <li>
                <Link to={`metropolia-react/exercices/user-registration`}>
                  User registration
                </Link>
              </li>
            </ul>
          </details>

          <details>
            <summary>6. Networking</summary>
            <ul>
              <li>
                <Link to={`metropolia-react/course/nasa`}>Nasa APOD</Link>
              </li>
              <li>
                <Link to={`metropolia-react/course/user-list`}>User List</Link>
              </li>
              <li>
                <Link to={`metropolia-react/course/user-info`}>User Info</Link>
              </li>
              <li>
                <Link to={`metropolia-react/course/trivia`}>Trivia</Link>
              </li>
              <li>
                <Link to={`metropolia-react/course/github`}>
                  Github React Repositories
                </Link>
              </li>
              <li>
                <Link to={`metropolia-react/course/github-search`}>
                  Search Github Repositories
                </Link>
              </li>
            </ul>
          </details>

          <details>
            <summary>7. 3rd Party Components</summary>
            <ul>
              <li>
                <Link to={`metropolia-react/course/todogrid`}>Todo Grid</Link>
              </li>
              <li>
                <Link to={`metropolia-react/exercices/todogrid-enhanced`}>
                  Todo Grid Enhanced
                </Link>
              </li>
            </ul>
          </details>

          <details>
            <summary>8. React Router</summary>
            <ul>
              <li>
                <Link to={`metropolia-react/exercices/todo-list-router`}>
                  Todo List Router
                </Link>
              </li>
            </ul>
          </details>

          <details>
            <summary>9. Material UI</summary>
            <ul>
              <li>
                <Link to={`metropolia-react/course/material-todo`}>
                  Material Todolist
                </Link>
              </li>
              <li>
                <Link to={`metropolia-react/exercices/material-todo-datagrid`}>
                  Material Todolist (DataGrid)
                </Link>
              </li>
            </ul>
          </details>

          <details>
            <summary>10. React & Firebase</summary>
            <ul>
              <li>
                <Link to={`metropolia-react/course/firebase-todo`}>
                  Firebase Todolist
                </Link>
              </li>
              <li>
                <Link to={`metropolia-react/exercices/bookstore`}>
                  Firebase Bookstore
                </Link>
              </li>
            </ul>
          </details>

          <details>
            <summary>11. Testing & Deployment</summary>
            <ul>
              <li>
                <Link to={`metropolia-react/course/testing`}>
                  Todolist Testing
                </Link>
              </li>
              <li>
                <Link to={`metropolia-react/exercices/todolist-remove`}>
                  Todolist With Remove
                </Link>
              </li>
            </ul>
          </details>
        </nav>
      </div>
      {/* <div id="detail"> */}
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}

{
  /* <h2>Metropolia</h2> */
}
{
  /* <form id="search-form" role="search">
  <input
    id="q"
    aria-label="Search contacts"
    placeholder="Search"
    type="search"
    name="q"
  />
  <div id="search-spinner" aria-hidden hidden={true} />
  <div className="sr-only" aria-live="polite"></div>
</form>
<form method="post">
  <button type="submit">New</button>
</form> */
}
