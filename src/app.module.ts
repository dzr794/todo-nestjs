import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [AuthModule, PrismaModule, TasksModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
