// определяем порт сервера
const port = 5000

// инициализация установленных зависимостей
const express = require('express')
require('dotenv').config()
const axios = require('axios')
const app = express()
const cors = require('cors')
app.use(cors())

// прослушивание порта 5000
app.listen(5000, ()=> console.log(`Сервер работает на порту ${port}` ))

// API запрос
app.get('/', (req,res)=>{    
    const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
        headers: {
            'X-RapidAPI-Key':process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
   };
   
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}