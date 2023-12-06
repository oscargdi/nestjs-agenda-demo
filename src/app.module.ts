import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AgendaModule } from './agenda/agenda.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AgendaModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          db: {
            address: configService.getOrThrow<string>('MONGO_URL'),
            collection: configService.getOrThrow<string>('MONGO_COLLECTION'),
          },
          defaultLockLifetime: configService.getOrThrow<number>(
            'DEFAULT_LOCK_LIFETIME',
          ),
        };
      },
      inject: [ConfigService],
    }),
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
