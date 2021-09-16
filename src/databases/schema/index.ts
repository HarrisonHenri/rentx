import { appSchema } from '@nozbe/watermelondb/Schema'

import { usersSchema } from './userSchema'

export const schema = appSchema({ version: 1, tables: [usersSchema] })
