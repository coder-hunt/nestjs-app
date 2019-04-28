import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
  } from 'typeorm'
import { UsersFriendRelation } from './usersFriendsRelation.entity'

@Entity('users')
export class Users {

  @PrimaryGeneratedColumn({
    name: 'id',
  })
  Id: number;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'first_name',
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'last_name',
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 50,
    name: 'avatar',
  })
  avatar: string;

  @OneToMany(type => UsersFriendRelation, usersFriendRelation => usersFriendRelation.users, { cascade: true })
  users: UsersFriendRelation[]

}
