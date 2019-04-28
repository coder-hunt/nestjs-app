import { createConnection } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { ormConfig } from './orm-config'


const dbProviders = {
  provide: 'DbConnectionToken',
  useFactory: () => createConnection(ormConfig),
};

export const dbProvider = dbProviders;
