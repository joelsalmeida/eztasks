export interface ITodo {
  id?: string;
  title: string;
  description?: string;
  userId: string;
}

export interface ITodoUpdate {
  title?: string;
  description?: string;
}
