import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IServiceResponse } from 'src/utils/interfaces/service-response.interface';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(
    username: string,
    password: string,
    type: string,
  ): Promise<IServiceResponse> {
    const result: IServiceResponse = { data: null, error: null };
    return result;
  }
}
