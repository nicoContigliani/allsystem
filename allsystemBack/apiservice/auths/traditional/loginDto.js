const jwt = require('jsonwebtoken');
const { resource } = require('../../../app');

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

const login = async (resource) => {
    const data = resource[0]
    const rest = await data.map((item) => {
        delete item.password
        return item
    }
    )
    const token = jwt.sign({
        id_user: rest[0].id_user,
        fullname: rest[0].fullname,
        email: rest[0].email,
        id_rol: rest[0].id_rol
    }, process.env.TOKEN_SECRET,
        {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        }
    )

    const element = { token, rest, error: null }

    console.log(element,"esto esta en 51 dto login")
    return element
}


module.exports = {
    login
}