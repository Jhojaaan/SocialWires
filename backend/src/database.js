const mongoose = require('mongoose');

const dbConnection = async () =>{
    try {
        await mongoose.connect('mongodb+srv://Jhojan:jhojan1234@socialwires.aae2jbk.mongodb.net/SocialWires');
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD')
    }
}

module.exports = {
    dbConnection
};