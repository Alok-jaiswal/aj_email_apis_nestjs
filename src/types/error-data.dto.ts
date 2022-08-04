import { HttpStatus } from '@nestjs/common';
import { ApiResponseProperty } from '@nestjs/swagger';

export class ErrorData {
  @ApiResponseProperty()
  statusCode?: HttpStatus;

  @ApiResponseProperty()
  message?: string;

  @ApiResponseProperty()
  name?: string;

  @ApiResponseProperty()
  details?: string | object;

  @ApiResponseProperty()
  stack?: string;
}