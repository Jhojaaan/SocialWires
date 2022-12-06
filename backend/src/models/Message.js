const {Schema, model } = require('mongoose');

const messageSchema = new Schema({
    title:{ 
        type: String,
        require: true,
    },
    message:{ 
        type: String,
        require: true,
    },
    
    
},
{timestamps: true}
)

module.exports = model('Message', messageSchema);