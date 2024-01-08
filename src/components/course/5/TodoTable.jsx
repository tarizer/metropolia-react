import PropTypes from "prop-types";

function TodoTable({ todos, deleteHandle }) {
  return (
    <table>
      <tbody>
        {todos.map((item, index) => (
          <tr key={item.id}>
            <td>{item.description}</td>
            <td>{item.date}</td>
            <td>
              <button onClick={() => deleteHandle(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TodoTable.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteHandle: PropTypes.func.isRequired,
};

export default TodoTable;
