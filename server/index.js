require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { PORT } = process.env
const { deleteComment, getProfile, updateProfile, getComment, createComment, getCompliment, getCompliment2, getCompliment3, getCompliment4} = require('./controller')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get('/profile', getProfile)
app.post('/submit-form', updateProfile)

app.post('/sub-comment', createComment)
app.get ('/get-comment', getComment)
app.get('/profile/:name', getProfile)
app.delete('/get-comment/:id', deleteComment)

app.get('/api/compliment', getCompliment);
app.get('/api/compliment2', getCompliment2);
app.get('/api/compliment3', getCompliment3);
app.get('/api/compliment4', getCompliment4);

//does it have to retrieve data from /profile to get the name?





























// app.get("/api/compliments", getCompliment);


// const usersCtrl = require('./controller/users.controller')

// app.post('/api/user', usersCtrl.createUsers)
// app.post('/seed', seed)

// app.get('/countries', getCountries)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))



