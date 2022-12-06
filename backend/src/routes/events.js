const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const Message = require('../models/Message');
const router = Router();


//Todas las rutas tienen que pasar por la validación del token
router.use(validarJWT);

router.get('/allmessages', async(req, res) =>{
    // res.json([
    //     {
    //         _id:1,
    //         title: 'Message one',
    //         message:'loremp ipsum',
    //         date:'10:25 am 20/11/2022',
    //         usuario: 'usuario'

    //     },
    //     {
    //         _id:2,
    //         title: 'Message two',
    //         message:'loremp ipsum',
    //         date:'10:25 am 20/11/2022',
    //         usuario: 'usuario'

    //     },
    //     {
    //         _id:3,
    //         title: 'Message three',
    //         message:'loremp ipsum',
    //         date:'10:25 am 20/11/2022',
    //         usuario: 'usuario'

    //     },
    // ])

    const messages = await Message.find().exec();
    return res.status(200).json(messages)
})

router.post('/createmessage', async (req, res) => {
   
    const { title, message } = req.body;
    // try {
        const newMessage = new Message({title, message});
        await newMessage.save();

        res.status(200).json(newMessage);


    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json('Por favor hable con el administrador');
    // }

   

})



module.exports = router;