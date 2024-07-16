import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema:"./drizzle",
    out:"./drizzle/migrations",
    dialect: "sqlite",
    dbCredentials:{
        url:"./sqlite.db"
    }
  })