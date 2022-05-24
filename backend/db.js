const mongoose = require('mongoose');

mongoose.connect('<your db link>', err => {
    if(!err){
        console.log('DB Connection Sucessful');
    } else {
        console.log('Error in Connection' + err);
    }
})

module.exports = mongoose;
