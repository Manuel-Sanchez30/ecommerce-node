const User = require("../../models/User");

const userCreate = async ()=>{

    const user = {
        firstName:"Matias",
        lastName:"Rios",
        email:"matias@gmail.com",
        password:"pass1234",
        phone:"123456789",
    }

    await User.create(user)

};

module.exports = userCreate