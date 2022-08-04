import { ApiResponse, ApiResponseProperty } from '@nestjs/swagger';
import { ErrorData } from './error-data.dto';
import { ResponseStatus } from './response-status.enum';

export class AppResponse {
  @ApiResponseProperty({ deprecated: true })
  status: boolean;

  @ApiResponseProperty()
  statusText: ResponseStatus;

  @ApiResponseProperty()
  message?: string;

  @ApiResponseProperty()
  data?: any[] | any;

  @ApiResponseProperty()
  error?: ErrorData;

  @ApiResponseProperty()
  errorMessages?: string;
}