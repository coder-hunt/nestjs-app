import { dbProvider } from './db-provider'
import { Module } from '@nestjs/common'

@Module({
  components: [dbProvider],
  exports: [dbProvider],
  providers: [dbProvider],
})
export class DbModule { }
