import audioRoutes from './routes/audio.routes.js'
import cors from 'cors'
import express from 'express'

const app = express()
const port = process.env.PORT || 8080

// ============ Middlewares ============
app.use(express.json())
app.use(cors({
  // origin: 'http://frontend-app.com',
}))

// ============ Routes ============
app.use(audioRoutes)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
