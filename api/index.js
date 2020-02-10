const express = require('express')
const helmet = require('helmet')
const redis = require("redis"),

client = redis.createClient();

const app = express()
const port = 5000

const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

app.use(helmet())

app.get('/api/jobs', async (req, res) => {
  const jobs = await getAsync('github');
  return res.json(jobs)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))