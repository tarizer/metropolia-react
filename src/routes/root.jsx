import { Link, Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>
          <Link className="link" to={`/`}>
            React Fundamentals
          </Link>
        </h1>
        <div>
          <Link className="link" to={`/`}>
            Metropolia
          </Link>
        </div>

        <nav>
          <details>
            <summary>4. Props & State</summary>
            <ul>
              <li>
                <Link to={`/exercices/react-counter`}>Counter</Link>
              </li>
              <li>
                <Link to={`/exercices/conditional-rendering`}>
                  Conditional rendering
                </Link>
              </li>
              <li>
                <Link to={`/exercices/change-color`}>Change color</Link>
              </li>
            </ul>
          </details>

          <details>
            <summary>5. Reading User Input</summary>
            <ul>
              <li>
                <Link to={`/course/multiple-imput`}>Multiple imput</Link>
              </li>
              <li>
                <Link to={`/course/todo`}>Todo list</Link>
              </li>

              <li>
                <Link to={`/exercices/age-check`}>Age check</Link>
              </li>
              <li>
                <Link to={`/exercices/calculator`}>Calculator</Link>
              </li>
              <li>
                <Link to={`/exercices/user-registration`}>
                  User registration
                </Link>
              </li>
            </ul>
          </details>

          <details>
            <summary>6. Networking</summary>
            <ul>
              <li>
                <Link to={`/course/nasa`}>Nasa APOD</Link>
              </li>
              <li>
                <Link to={`/course/user-list`}>Userlist</Link>
              </li>
              <li>
                <Link to={`/course/user-info`}>Userinfo</Link>
              </li>
              <li>
                <Link to={`/course/trivia`}>Trivia</Link>
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
