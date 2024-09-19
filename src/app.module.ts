import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { GoogleModule } from './googlehome/google.module';

@Module({
  imports: [AuthModule]
})
export class AppModule {}
