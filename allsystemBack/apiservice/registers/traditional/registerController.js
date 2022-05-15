const registerModel = require('./registerModel')
const registerDto = require('./registerDto');


const register = async (req, res) => {
    const { fullname, password, email, id_rol } = req.body
    const userCreate = req.body
    const user = await registerModel.register(userCreate);
    console.log(user, "esto esta en la linea 10 en controller ")
    const userRow = await registerDto.register(user)
    res.status(200).json(userRow);
}


module.exports = {
    register
}