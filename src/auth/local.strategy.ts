import { UserEntity } from './../database/entities/user.entity';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from 'src/api/user/services/user.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super();
  }

  async validate(userName: string, password: string): Promise<UserEntity> {
    const user = await this.userService.findOneUser(userName);
    if (user === undefined) throw new UnauthorizedException();

    if (user !== undefined && user.password == password) {
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }
}
