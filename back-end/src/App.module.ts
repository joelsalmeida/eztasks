import { Module } from '@nestjs/common';
import { UserController } from './controllers/User.controller';
import { UserModel } from './models/User.model';
import { PrismaService } from './prisma/Prisma.service';
import { UserService } from './services/User.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService, UserService, UserModel],
})
export class AppModule {}
