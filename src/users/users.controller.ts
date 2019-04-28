import { async } from 'rxjs/internal/scheduler/async'
import { Controller, Get, Param } from '@nestjs/common'
import { UsersService } from './users.service'

// Here id reffer to user_id
@Controller('users')
export class UsersController {

  readonly usersService: UsersService
  constructor(private service: UsersService) { this.usersService = service }

  @Get(':offset')
  async findUsers(@Param('offset') offset) {
    return await this.usersService.fetchUsersDetails(offset)
  }

  @Get('/friends/:id')
  async findUsersFriends(@Param('id') Id) {
    return await this.usersService.fetchUsersFrinds(Id)
  }

  @Get('/friends/friends/:id')
  async findUsersFriendsFriends(@Param('id') Id) {
    return await this.usersService.fetchUsersFriendsFriend(Id)
  }
}
