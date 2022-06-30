import { Injectable } from '@nestjs/common';
import { UserModel } from '../models/User.model';

@Injectable()
export class UserService {
  constructor(private _userModel: UserModel) {}

  getAll() {
    return this._userModel.getAll();
  }
}
