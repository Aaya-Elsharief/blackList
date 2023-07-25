import { Controller, UseGuards, Post, Body, Get, Req } from '@nestjs/common';
import { Public } from 'src/modules/auth/roles/decorators/public.decorator';
import { SuccessResponse } from 'src/utils/responses/success-response.service';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { LoginUserDto } from '../dtos/login-user.dto';
import { JwtAuthGuard } from 'src/modules/auth/guard/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  async createUser(@Body() payload: CreateUserDto) {
    const response = await this.userService.createUser(payload);
    return new SuccessResponse(response.data);
  }

  @Public()
  @Post('/login')
  async loginUser(@Body() payload: LoginUserDto) {
    const response = await this.userService.loginUser(payload);
    return new SuccessResponse(response.data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async listUsers() {
    const response = await this.userService.listUsers();
    return new SuccessResponse(response.data);
  }
  @UseGuards(JwtAuthGuard)
  @Get('/logout')
  async logout(@Req() req) {
    const authUser = req.user;
    const userId = authUser.userId;
    const accessToken = authUser.token;
    const response = await this.userService.logoutUser(userId, accessToken);
    return new SuccessResponse(response.data);
  }
}
