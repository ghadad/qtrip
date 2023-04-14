import { ConfigService } from '@nestjs/config';
import { Controller, Get } from '@nestjs/common';
@Controller('settings')
export class SettingsController {
  constructor(private readonly configService: ConfigService) {}
  @Get('env')
  getEnv(): any {
    return { stage: this.configService.get('STAGE') };
  }

  @Get('config')
  getConfig(): any {
    return this.configService.get('app');
  }
}
