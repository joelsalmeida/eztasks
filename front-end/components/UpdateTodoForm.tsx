import { useContext, useEffect, useState } from 'react';
import { updateTodoRequest } from '../helpers/requests';

import { TodoContext } from '../pages/todos';

const UpdateTodoForm = () => {
  const { isActive, id } = useContext(TodoContext);

  const [title, setTodoTitle] = useState<string | undefined>(undefined);
  const [description, setTodoDescription] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState('In progress');
  const [userId, setUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    setUserId('8d11cf0a-5ce7-480e-9e7a-ba1b160772b5');
  }, []);

  const formStyle = {
    active: 'block',
    inactive: 'none',
  };

  return (
    <form style={{ display: isActive ? formStyle.active : formStyle.inactive }}>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" onChange={(e) => setTodoTitle(e.target.value)} />
      </label>

      <label htmlFor="description">
        Description:
        <input
          type="email"
          id="description"
          onChange={(e) => setTodoDescription(e.target.value)}
        />
      </label>

      <label htmlFor="status">
        <select id="status" onChange={({ target: { value } }) => setStatus(value)}>
          <option value="In progress">In progress</option>
          <option value="Done">Done</option>
        </select>
      </label>

      <button
        type="button"
        onClick={() => updateTodoRequest({ title, description, status, userId }, id)}
      >
        Update
      </button>
    </form>
  );
};

export default UpdateTodoForm;
