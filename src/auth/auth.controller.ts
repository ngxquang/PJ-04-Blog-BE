import { AuthService } from './auth.service';
import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from 'src/user/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {

    constructor (private authService: AuthService) {}

    @Post('register')
    register(@Body() registerUserDto:RegisterUserDto):Promise<User> {
        console.log(registerUserDto);
        return this.authService.register(registerUserDto);
    }

    @Post('login')
    @UsePipes(ValidationPipe)
    login(@Body() loginUserDto: LoginUserDto): Promise<any> {
        console.log(loginUserDto);
        return this.authService.login(loginUserDto);
    }

    @Post('refresh-token')
    refreshToken(@Body() {refresh_token} ): Promise<any> {
        console.log('refresh_token_api');
        return this.authService.refreshToken(refresh_token);
    }
}
