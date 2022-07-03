import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
  UsePipes,
} from '@nestjs/common';

import { UserService } from '../services/User.service';
import { IUser, IUserUpdate } from '../interfaces/IUser';
import { JoiValidationPipe } from '../middlewares/JoiValidationPipe';
import { CreateUserSchema, UpdateUserSchema } from '../schemas/UserSchemas';
import { CustomExceptionFilter } from '../middlewares/CustomExceptionFilter';

@Controller('users')
@UseFilters(CustomExceptionFilter)
export class UserController {
  constructor(private _userService: UserService) {}

  @Post()
  create(@Body(new JoiValidationPipe(CreateUserSchema)) userData: IUser) {
    return this._userService.create(userData);
  }

  @Get()
  getAll() {
    return this._userService.getAll();
  }

  @Put(':id')
  update(
    @Param() param: { id: string },
    @Body(new JoiValidationPipe(UpdateUserSchema)) userData: IUserUpdate,
  ) {
    return this._userService.update(param.id, userData);
  }

  @Delete(':id')
  remove(@Param() param: { id: string }) {
    return this._userService.remove(param.id);
  }
}
