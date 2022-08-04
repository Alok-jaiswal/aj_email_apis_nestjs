import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  create(createUserDto: CreateUserDto) {
    let user: UserEntity = new UserEntity();
    user.userId = createUserDto.userId;
    user.email = createUserDto.email;
    user.userName = createUserDto.username;
    user.password = createUserDto.password;
    user.role = 'user';

    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  async getAllMailId() {
    try {
      const res = await this.userRepository.find({ select: ['email'] });
      const value = [...new Set(res)];
      return value;
    } catch (ex) {
      return `error occurs ${ex}`;
    }
  }
  async findOneUser(username: string) {
    const res= this.userRepository.findOneOrFail({where:{userName:username}})
    console.log(res);
    return res;
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { userId: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(updateUserDto.userId, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
