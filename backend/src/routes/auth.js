const { Router } = require('express');
const User = require('../models/User');
const router = Router();


const jwt = require('jsonwebtoken')

router.get('/', (req,res) => res.send('Holaaaa'));

//REGISTRO DE USUARIO
router.post('/signup', async (req, res) =>{

    const {user,name, email, password } = req.body; 

    const newUser = new User({user,name,email,password});
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, 'secretkey');
    
    res.status(200).json({token});

} );


//INGRESO DE USUARIO
router.post('/signin', async (req, res) =>{

    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user) return res.status(401).send("El correo no existe");
    if(password !== user.password) return res.status(401).send('La contraseña es incorrecta');

    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json({token});
});

module.exports = router;