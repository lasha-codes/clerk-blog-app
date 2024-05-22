import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import blogRoute from './routes/blogs.js'

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use('/blogs', blogRoute)

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT}`)
})
