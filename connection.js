const mongoose = require('mongoose');

async function connectMongoDb(url){
   return mongoose.connect(url).then(()=>{
    console.log('Mongo db is connected Successfully')
   }) 
}

module.exports = {
    connectMongoDb
};