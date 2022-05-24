const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<pass>:Aditya01@cluster0.agzgv.mongodb.net/meandbs?retryWrites=true&w=majority', err => {
    if(!err){
        console.log('DB Connection Sucessful');
    } else {
        console.log('Error in Connection' + err);
    }
})

module.exports = mongoose;
