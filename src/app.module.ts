import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { ExercisesController } from '@/modules/exercises/exercises.controller';
import { TrainingsController } from '@/modules/trainings/trainings.controller';
import { ExercisesService } from './modules/exercises/exercises.service';
import { TrainingsService } from './modules/trainings/trainings.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ExercisesModule } from './modules/exercises/exercises.module';
import { TrainingsModule } from './modules/trainings/trainings.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    DatabaseModule,
    ExercisesModule,
    TrainingsModule,
    UsersModule,
  ],
  controllers: [AppController, ExercisesController, TrainingsController],
  providers: [ExercisesService, TrainingsService],
})
export class AppModule { }
