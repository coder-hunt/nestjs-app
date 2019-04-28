import { Users } from '../entities/uesrs.entity'
import { UsersFriendRelation } from '../entities/usersFriendsRelation.entity'

let OrmConfig = {
  type: 'postgres',
  host: 'localhost',
  port: parseInt('5432', 10),
  username: 'postgres',
  password: '1234',
  database: 'postgres',
  logging: true,
  logger: 'file',
  idleTimeoutMillis: 3000,
  extra: {
    max: 20,
    min: 1,
  },
  entities: [
    Users,
    UsersFriendRelation
  ],
  synchronize: true, // DEV only, do not use on PROD!
};
export const ormConfig = OrmConfig;
