import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TimerService } from '../services/timer.service';
import { Timer } from '../models/timer.model';

@Controller('timers')
export class TimerController {
  constructor(private readonly timerService: TimerService) {}

  @Post()
  async create(@Body() timer: Timer) {
    return this.timerService.create(timer);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.timerService.findOne(id);
  }
}
