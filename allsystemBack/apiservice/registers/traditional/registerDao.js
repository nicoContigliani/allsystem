const pool = require('../../../services/database');
const bcrypt = require('bcrypt')


const UserGet = async (data) => {
    const response = await pool.query("SELECT * FROM public.users where email ='" + data + "'");
    user = response.rows
    return user
}
const UserGetAll = async (data) => {
    const response = await pool.query("SELECT * FROM public.users ");
    user = response.rows
    return user
}


const registerGet = async () => {
    const response = await pool.query('SELECT * FROM public.users;');
    user = response.rows
    return user
}
const RegisterPost = async (newUsers) => {
    console.log(newUsers, "11 en registerDao")
    const password = newUsers.hashedPassword;
    const fullname = newUsers.fullname;
    const email = newUsers.email;
    const id_roles = newUsers.id_rol;
    try {
        const response = await pool.query('INSERT INTO public.users (fullname, password,email,id_roles) VALUES ($1, $2,$3,$4)', [fullname, password, email, id_roles]);
        const all = UserGetAll()
        return all
    } catch (error) {
        console.log(error)

    }
    return user
}
module.exports = {
    registerGet,
    RegisterPost,
    UserGet
}