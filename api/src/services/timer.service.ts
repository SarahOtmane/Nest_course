import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Timer, TimerCreationAttributes } from '../models/timer.model';

@Injectable()
export class TimerService {
  constructor(@InjectModel(Timer) private timerModel: typeof Timer) {}

  async create(timer: TimerCreationAttributes): Promise<Timer> {
    return this.timerModel.create(timer);
  }

  async findOne(id: string): Promise<Timer> {
    const timer = await this.timerModel.findByPk(id);
    if (!timer) {
      throw new NotFoundException(`Timer with id ${id} not found`);
    }
    return timer;
  }
}
