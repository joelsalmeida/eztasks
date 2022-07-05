import { useContext } from 'react';

import { deleteTodoRequest } from '../helpers/requests';
import { TodoContext } from '../pages/todos';
import { ITodo } from '../interfaces/TodoInterfaces';

const Todo = (props: ITodo) => {
  const { isActive, setIsActive, setId } = useContext(TodoContext);

  const updateHandler = () => {
    setIsActive(!isActive);
    setId(props.id);
  };

  return (
    <tr key={props.id}>
      <td>{props.title}</td>
      <td>{props.description}</td>
      <td>{props.status}</td>

      <td>
        <button onClick={() => deleteTodoRequest(props.id)}>Delete</button>
      </td>
      <td>
        <button onClick={updateHandler}>Edit</button>
      </td>
    </tr>
  );
};

export default Todo;
