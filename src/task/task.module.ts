import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TaskController],
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TaskService],
})
export class TaskModule {}
