import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/Prisma.service';

@Injectable()
export class UserModel {
  constructor(private _prismaService: PrismaService) {}

  public async getAll() {
    const usersFound = await this._prismaService.user.findMany();
    return usersFound;
  }
}
