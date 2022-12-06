const {Schema, model } = require('mongoose');

const userSchema = new Schema({
    user:{ 
        type: String,
        require: true,
    },
    name:{ 
        type: String,
        require: true,
    },
    email:{ 
        type: String,
        require: true,
    },
    password:{ 
        type: String,
        require: true,
    },
})

module.exports = model('User', userSchema);