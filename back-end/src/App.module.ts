import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/Prisma.service';

import { UserModel } from './models/User.model';
import { UserService } from './services/User.service';
import { UserController } from './controllers/User.controller';

import { TodoModel } from './models/Todo.model';
import { TodoService } from './services/Todo.service';
import { TodoController } from './controllers/Todo.controller';

@Module({
  imports: [],
  controllers: [UserController, TodoController],
  providers: [PrismaService, UserService, UserModel, TodoService, TodoModel],
})
export class AppModule {}
