export interface ITodo {
  id?: string;
  title: string;
  description: string;
  status: 'In progress' | 'Complete';
}

export interface ITodoUpdate {
  title?: string;
  description?: string;
  status?: string;
  userId: string | undefined;
}
