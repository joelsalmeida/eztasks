import { Injectable } from '@nestjs/common';
import { IUser, IUserUpdate } from 'src/interfaces/IUser';
import { UserModel } from '../models/User.model';

@Injectable()
export class UserService {
  constructor(private _userModel: UserModel) {}

  create(userData: IUser) {
    return this._userModel.create(userData);
  }

  getAll() {
    return this._userModel.getAll();
  }

  update(id: string, userData: IUserUpdate) {
    return this._userModel.update(id, userData);
  }

  remove(id: string) {
    return this._userModel.remove(id);
  }
}
