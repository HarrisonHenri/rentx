import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { User } from './model/User'
import { schema } from './schema'

const adapter = new SQLiteAdapter({
  schema,
})

export const database = new Database({
  adapter,
  modelClasses: [User],
})
