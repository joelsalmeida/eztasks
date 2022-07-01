export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  todos?: string[];
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
}
