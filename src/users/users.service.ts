import { In } from 'typeorm'
import { Inject, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm/repository/Repository'
import { Users } from '../entities/uesrs.entity'
import { UsersFriendRelation } from '../entities/usersFriendsRelation.entity'


@Injectable()
export class UsersService {

  constructor(
    @Inject('UsersRepositoryToken')
    private readonly usersRepository: Repository<Users>,
    @Inject('UsersFriendsRepositoryToken')
    private readonly usersFriendsRepository: Repository<UsersFriendRelation>,
  ) { }
  /** find users */
  async fetchUsersDetails(offset) {
    let usersDetails = await this.usersRepository.find({
      skip: offset
    })
    return usersDetails
  }
  /** find users friends */
  async fetchUsersFrinds(Id) {
    const usersFrindsList = await this.usersFriendsRepository.find({
      users: In(Id)
    })
    let friendIds = usersFrindsList.map(function (data) {
      return data.friendId
    })
    return await this.usersRepository.find({
      Id: In(friendIds)
    })
  }
  /** find users friends friends */
  async fetchUsersFriendsFriend(Id) {
    const usersFrindsList = await this.usersFriendsRepository.find({
      where: { users: Id }
    })
    let friendIds = usersFrindsList.map(function (data) {
      return data.friendId
    })
    const usersFriendsFriendIds = await this.usersFriendsRepository.find({
      users: In(friendIds)
    })
    return await this.usersRepository.find({
      users: In(usersFriendsFriendIds)
    })
  }
}
