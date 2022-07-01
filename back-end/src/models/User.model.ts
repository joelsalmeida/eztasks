import { Injectable } from '@nestjs/common';
import { IUser, IUserUpdate } from 'src/interfaces/IUser';
import { PrismaService } from '../prisma/Prisma.service';

@Injectable()
export class UserModel {
  constructor(private _prismaService: PrismaService) {}

  async create(userData: IUser) {
    const createdUser = await this._prismaService.user.create({
      data: userData,
    });

    return createdUser;
  }

  public async getAll() {
    const usersFound = await this._prismaService.user.findMany();
    return usersFound;
  }

  async update(id: string, userData: IUserUpdate) {
    const updatedUser = await this._prismaService.user.update({
      where: { id },
      data: userData,
    });
    return updatedUser;
  }

  async remove(id: string) {
    const removedUser = await this._prismaService.user.delete({
      where: { id },
    });
    return removedUser;
  }
}
