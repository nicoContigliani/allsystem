const registerDao = require('./registerDao')
const bcrypt = require('bcrypt')

const register = async (elemento) => {
    const users = []
    const fullname = elemento.fullname;
    const email = elemento.email;
    const password = elemento.password;
    const userss = await registerDao.registerGet()
    const id_rol = elemento.id_rol || 2
    const resultados = userss.filter(u => u.email === email)
    if (resultados.length >= 1) {
        console.log("el usuario ya existe")
        users.push(
            {
                "id_user": "0",
                "email": "User Exist",
                "error": 401
            }
        )
    } else {
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = { email, fullname, hashedPassword, id_rol }
        const saveRegister = await registerDao.RegisterPost(newUser)
        console.log(saveRegister, "25 regsiter model")
        return saveRegister

    }

    return saveRegister

}




module.exports = {
    register
}