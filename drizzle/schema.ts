import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: text('id').notNull().primaryKey(),
	name: text('name').notNull()
});
