import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { IServiceResponse } from 'src/utils/interfaces/service-response.interface';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../dtos/login-user.dto';
import { ErrorCodes } from 'src/utils/constants/error-codes';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../schemas/user.schema';
import { Cache } from 'cache-manager';

const ACCESS_TOKEN_EXPIRY_IN = { S: 86400, MS: 86400000 }; //1 day
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private jwtService: JwtService,
    @Inject('CACHE_MANAGER') private cacheManager: Cache,
  ) {}

  async createUser(payload: CreateUserDto): Promise<IServiceResponse> {
    const serviceResponse = { data: null, error: null };

    const salt = bcryptjs.genSaltSync(10);
    payload.password = bcryptjs.hashSync(payload.password, salt);

    const data: any = {
      fullName: payload.fullName ? payload.fullName : null,
      email: payload.email,
      passwordHash: payload.password,
    };
    const userDoc = await this.userRepository.create(data, true);

    //tokens
    const tokens = this.generateTokens(userDoc._id);

    serviceResponse.data = {
      access_token: tokens.accessToken,
      user: await this.userRepository.findOne({ _id: userDoc._id }),
    };
    return serviceResponse;
  }

  async getUserByEmail(email: string): Promise<User> {
    const res = await this.userRepository.findOne({ email });
    return res;
  }

  async loginUser(payload: LoginUserDto): Promise<IServiceResponse> {
    const serviceResponse = { data: null, error: null };

    //Get user
    const userDoc = await this.userRepository.findOne(
      {
        email: payload.email,
      },
      {},
      false,
    );

    if (!userDoc) {
      const error = ErrorCodes.INVALID_USER_PASSWORD;
      throw new BadRequestException(error);
    }

    if (userDoc && userDoc.passwordHash) {
      const isValidPassword = bcryptjs.compareSync(
        payload.password,
        userDoc.passwordHash,
      );

      if (!isValidPassword) {
        const error = ErrorCodes.INVALID_USER_PASSWORD;
        throw new BadRequestException(error);
      }
    }

    //tokens
    const tokens = this.generateTokens(userDoc._id);

    serviceResponse.data = {
      access_token: tokens.accessToken,
      user: await this.userRepository.findOne({ _id: userDoc._id }),
    };

    return serviceResponse;
  }

  async logoutUser(
    userId: string,
    accessToken: string,
  ): Promise<IServiceResponse> {
    const serviceResponse = { data: null, error: null };
    await this.cacheManager.set(
      `token:${accessToken}`,
      userId,
      ACCESS_TOKEN_EXPIRY_IN.MS,
    );
    serviceResponse.data = 'logged out';
    return serviceResponse;
  }

  generateTokens(userId: any) {
    /*
     * Tokens
     */
    const tokenPayload = {
      id: userId,
      tokenType: 'apiJwtToken',
    };

    const accessToken = this.jwtService.sign(tokenPayload, {
      expiresIn: ACCESS_TOKEN_EXPIRY_IN.S,
    });

    return { accessToken };
  }

  async listUsers(): Promise<IServiceResponse> {
    const serviceResponse = { data: null, error: null };

    const data = await this.userRepository.FindMany({}, { passwordHash: 0 });

    serviceResponse.data = data;
    return serviceResponse;
  }
}
