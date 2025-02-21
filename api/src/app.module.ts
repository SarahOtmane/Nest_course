import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/usr.module';
import { TimerModule } from './modules/timer.module';
import { JwtMiddleware } from './modules/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
    UserModule,
    TimerModule,
    JwtMiddleware,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
