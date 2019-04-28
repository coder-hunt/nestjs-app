import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DbModule } from './db/db.module'
import { Module } from '@nestjs/common'
import { UsersController } from './users/users.controller'
import { usersFriendsProviders, usersProviders } from './users/users.providers'
import { UsersService } from './users/users.service'

@Module({
  imports: [DbModule],
  controllers: [AppController, UsersController],
  providers: [
    AppService,
    ...usersFriendsProviders,
    ...usersProviders,
    UsersService],
})
export class AppModule { }
