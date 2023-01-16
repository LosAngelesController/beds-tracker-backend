import fs from 'fs'

const config = require('../config.json');

const { Client } = require('pg')
export const pgclient = new Client({
  user: config.db.username,
  host: config.db.host,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync('./server-ca.pem').toString(),
    key: fs.readFileSync('./client-key.pem').toString(),
    cert:  fs.readFileSync('./client-cert.pem').toString(),
  }
})