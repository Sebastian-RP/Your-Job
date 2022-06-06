const { User } = require("../db.js")

const createUser = async ( 
    email,
    name,
    employment_status,
    age,
    image,
    description,
    technologies,
    nationality,
    url,
    cv) => {
        try{
            const newUser = await User.create({
                email,
                name,
                employment_status,
                age,
                image,
                description,
                technologies,
                nationality,
                url,
                cv
            });
            return "Account created"
        }   catch (error) {
            console.error("Error in createUser:", error.message);
        }
    };


module.exports = {
    createUser
}