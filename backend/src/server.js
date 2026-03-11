require('dotenv/config');
require('./models')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const sequelize = require('./config/database')

const { PORT } = process.env 

const app = express()

const userRoutes = require('./routes/userRoutes')
const movieRoutes = require('./routes/movieRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const favorityRoutes = require('./routes/favorityRoutes')
const watchRoutes = require('./routes/watchRoutes')

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/api/users', userRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/favorities', favorityRoutes)
app.use('/api/watch', watchRoutes)

sequelize.sync()
.then(() => {
    console.log('banco conectado')
})
.catch(err => {
    console.error(err)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
