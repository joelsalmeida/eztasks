import React, { useEffect, useState } from 'react';
import { createTodo } from '../helpers/requests';

const TodoForm = () => {
  const [title, setTodoTitle] = useState('');
  const [description, setTodoDescription] = useState('');
  const [status, setStatus] = useState<'In progress' | 'Complete'>('In progress');
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Hard coded for testing purpose only
    // Must be generated from user login
    setUserId('8d11cf0a-5ce7-480e-9e7a-ba1b160772b5');
  }, []);

  const updates = { userId, title, description, status };

  return (
    <form>
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

      <button type="button" onClick={() => createTodo(updates)}>
        Create
      </button>
    </form>
  );
};

export default TodoForm;
