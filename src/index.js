const express = require('express')

const url = process.env.APP_URL
const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({
    url,
    port
  })
})

app.listen(3000, () => {
  console.log(`App listening on port ${3000}`)
})