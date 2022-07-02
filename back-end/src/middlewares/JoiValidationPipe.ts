import { PipeTransform, Injectable, HttpException } from '@nestjs/common';
import Joi, { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any) {
    const { error } = this.schema.validate(value);

    if (Joi.isError(error)) {
      const message = error.details[0].message;
      throw new HttpException(message, 400);
    }

    return value;
  }
}
