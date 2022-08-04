import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/singup')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User created successfully!',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/getUsersList')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All users list',
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get('/getAllMailId')
  @ApiResponse({
    status: HttpStatus.OK,
    description: "All users email id's",
  })
  getAllMailId() {
    return this.userService.getAllMailId();
  }

  @Get('/getUserById:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User on given id',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch('/updateUser:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User Account update successfully!',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('/deleteUser:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User Account deleted',
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
