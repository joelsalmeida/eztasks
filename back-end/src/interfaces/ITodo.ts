export interface ITodo {
  id?: string;
  title: string;
  description?: string;
  status: string;
  userId: string;
}

export interface ITodoUpdate {
  title?: string;
  description?: string;
  status?: string;
}
