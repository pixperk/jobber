import { Controller, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  AuthenticateRequest,
  AuthServiceController,
  AuthServiceControllerMethods,
  User,
} from 'types/auth';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { TokenPayload } from './token-payload.interface';

@Controller()
@AuthServiceControllerMethods()
@UseGuards(JwtAuthGuard)
export class AuthController implements AuthServiceController {
  constructor(private readonly usersService: UsersService) {}

  authenticate(
    request: AuthenticateRequest & {
      user: TokenPayload;
    }
  ): Promise<User> | Observable<User> | User {
    console.log(request);

    return this.usersService
      .getUser({ id: request.user.userId })
      .then((user) => {
        return user;
      });
  }
}
