import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/User.service';

@Controller('users')
export class UserController {
  constructor(private _userService: UserService) {}

  @Get()
  getAll() {
    return this._userService.getAll();
  }
}
