const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.post('/api/location', async (req, res, next) => {
  await axios
    .get(
      `https://www.metaweather.com/api/location/search/?query=${req.body.title}`
    )
    .then((respnse) => res.json(respnse.data))
    .catch((err) => {
      const error = new Error(err.message, 500)
      return next(error)
    })
})

app.post('/api/weather', async (req, res, next) => {
  let now = new Date()
  await axios
    .get(
      `https://www.metaweather.com/api/location/${
        req.body.woeid
      }/${now.getFullYear()}/${now.getMonth() + 1}/${now.getDay()}`
    )
    .then((respnse) => {
      // res.json(respnse.data)
      let time = 0
      let data = []
      for (let value of respnse.data) {
        if (new Date(value.created).getTime() > time) {
          time = new Date(value.created).getTime()
          data.push(value)
        }
      }
      res.json(data)
    })
    .catch((err) => {
      const error = new Error(err.message, 500)
      return next(error)
    })
})

let port = 3001
app.listen(port, () => {
  console.log(`Node server started on port ${port}.`)
})
