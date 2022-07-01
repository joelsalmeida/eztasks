import { Injectable } from '@nestjs/common';
import { ITodo, ITodoUpdate } from 'src/interfaces/ITodo';
import { PrismaService } from '../prisma/Prisma.service';

@Injectable()
export class TodoModel {
  constructor(private _prismaService: PrismaService) {}

  async create(todoData: ITodo) {
    const createdTodo = await this._prismaService.todo.create({
      data: todoData,
    });
    return createdTodo;
  }

  public async getAll() {
    const todosFound = await this._prismaService.todo.findMany();
    return todosFound;
  }

  async update(id: string, todoData: ITodoUpdate) {
    const updatedTodo = await this._prismaService.todo.update({
      where: { id },
      data: todoData,
    });
    return updatedTodo;
  }

  async remove(id: string) {
    const removedTodo = await this._prismaService.todo.delete({
      where: { id },
    });
    return removedTodo;
  }
}
