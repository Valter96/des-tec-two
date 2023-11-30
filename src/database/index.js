const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://joal760:gWmgsD7fYr1QuVak@cluster0.5znilyq.mongodb.net/api-nodejs-mongodb?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Conexão bem sucedida!");
    })
    .catch((error) => {
        console.error("Erro ao conectar", error);
    })
    
mongoose.Promise = global.Promise;

module.exports = mongoose;