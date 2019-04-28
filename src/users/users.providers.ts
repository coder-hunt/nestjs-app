import { Connection, Repository } from 'typeorm'
import { Users } from '../entities/uesrs.entity'
import { UsersFriendRelation } from '../entities/usersFriendsRelation.entity'

export const usersProviders = [{
  provide: 'UsersRepositoryToken',
  useFactory: (connection: Connection) => connection.getRepository(Users),
  inject: ['DbConnectionToken'],
}];

export const usersFriendsProviders = [{
  provide: 'UsersFriendsRepositoryToken',
  useFactory: (connection: Connection) => connection.getRepository(UsersFriendRelation),
  inject: ['DbConnectionToken'],
}];