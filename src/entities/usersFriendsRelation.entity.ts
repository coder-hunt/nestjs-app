import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
  } from 'typeorm'
import { Users } from './uesrs.entity'


@Entity('users_friend_relation')
export class UsersFriendRelation {

  @PrimaryGeneratedColumn({
    name: 'id',
  })
  Id: number;

  @Column({
    type: 'int',
    name: 'friend_id'
  })
  friendId: Number

  @ManyToOne(type => Users, users => users.users)
  users: UsersFriendRelation[]
}
