const jwt = require('jsonwebtoken');

const register = async (resource) => {

    const data = resource;
    // console.log(rest)
    const rest = await data.map((item) => {
        delete item.password
        return item
    }
    )

    const token = jwt.sign(
        {
        id_user: rest.at(-1).id_user,
        fullname: rest.at(-1).fullname,
        email: rest.at(-1).email,
        id_rol: rest.at(-1).id_rol
    }, process.env.TOKEN_SECRET,
        {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        }
    )

    const element = { token, rest, error: null }
    console.log(element, "esto esta en 21 de  registerDTo")
    return element
}

module.exports = {
    register
}