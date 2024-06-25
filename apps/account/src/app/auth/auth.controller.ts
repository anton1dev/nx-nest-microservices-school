import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountLogin, AccountRegister } from '@school/contracts';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @RMQRoute(AccountRegister.topic)
  @RMQValidate()
  async register(dto: AccountRegister.Request) {
    return this.authService.register(dto);
  }

  @RMQRoute(AccountLogin.topic)
  @RMQValidate()
  async login(@Body() { email, password }: AccountLogin.Request) {
    const { id } = await this.authService.validateUser(email, password);

    return this.authService.login(id);
  }
}
