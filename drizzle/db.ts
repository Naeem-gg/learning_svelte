import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
// import { randFullName } from '@ngneat/falso';
import * as schema from "./schema"
const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite,{schema,logger:true});

// (async()=>{
//     for (let i = 0; i < 11; i++) {
//         await db.insert(schema.users).values([{id:crypto.randomUUID(),name:randFullName()}])
//     }
//     console.log(await db.query.users.findMany())
// })()