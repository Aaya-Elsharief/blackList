import { Controller } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
}
