import { appSchema } from '@nozbe/watermelondb/Schema'

import { usersSchema } from './userSchema'

export const schema = appSchema({
  version: 2,
  tables: [usersSchema],
})
