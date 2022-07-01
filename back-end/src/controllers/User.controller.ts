import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { UserService } from '../services/User.service';
import { IUser, IUserUpdate } from '../interfaces/IUser';

@Controller('users')
export class UserController {
  constructor(private _userService: UserService) {}

  @Post()
  create(@Body() userData: IUser) {
    return this._userService.create(userData);
  }

  @Get()
  getAll() {
    return this._userService.getAll();
  }

  @Put(':id')
  update(@Param() param: { id: string }, @Body() userData: IUserUpdate) {
    return this._userService.update(param.id, userData);
  }

  @Delete(':id')
  remove(@Param() param: { id: string }) {
    return this._userService.remove(param.id);
  }
}
