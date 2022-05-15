const loginModel = require('./loginModel')
const loginDto = require('./loginDto');


const findUser = async (req, res) => {
    const { fullname, password, email, id_rol } = req.body
    const user = req.body
    const users = await loginModel.login(user);
    const dataResult = [...users.flat()]
    if (dataResult[0].error === undefined) {
        const userRow = await loginDto.login(users)
        const token = userRow;

        res.header('auth-token', token).json({
            error: null,
            data: { token }
        })

    } else {
        res.json({
            error: 401,
            data: users
        })
    }

    // const user = await registerModel.register(userCreate);
    // console.log(user, "esto esta en la linea 10 en controller ")
    // const userRow = await registerDto.register(user)
    // res.status(200).json(userRow);
}


module.exports = {
    findUser
}