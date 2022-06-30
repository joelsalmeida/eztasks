import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/Prisma.service';

@Injectable()
export class TodoModel {
  constructor(private _prismaService: PrismaService) {}

  public async getAll() {
    const todosFound = await this._prismaService.todo.findMany();
    return todosFound;
  }
}
