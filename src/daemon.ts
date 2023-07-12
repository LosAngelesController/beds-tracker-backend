import {pgclient} from './postgres'
import cors from 'cors'

var argv = require('optimist').argv;

import compression from 'express-compression'

const express = require('express')
const app = express()
app.use(compression())
const port = argv.port || 3713;

async function daemon() {
    await pgclient.connect()
    const restest = await pgclient.query('SELECT * FROM shelters', [])
    console.log(restest.rows)
    // Hello world!

app.get('/', (req, res) => {
  res.type('html');
  res.send('Hello World!');
});

app.get('/shelters', cors(), async (req, res) => {
  const restest = await pgclient.query('https://api.sheety.co/aacf3e0f7311db48c4e758ecf773731f/cityOfLaShelters/master', [])
  res.json({
    rows: restest.rows
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  
    
  }
  
daemon()
