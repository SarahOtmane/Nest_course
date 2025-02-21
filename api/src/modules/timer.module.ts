import { Module } from '@nestjs/common';
import { TimerController } from '../controllers/timer.controller';
import { TimerService } from '../services/timer.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Timer } from '../models/timer.model';

@Module({
  imports: [SequelizeModule.forFeature([Timer])],
  controllers: [TimerController],
  providers: [TimerService],
})
export class TimerModule {}
