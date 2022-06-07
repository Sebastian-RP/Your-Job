const {CompanyPost} = require('../db.js')

const createPost = async (
    technologiesId,
    experience,
    typeof_contract,
    companyId,
    descripcion,
    min_salary,
    max_salary,
    modality) => {
        
    try {
        
        const newPost = await CompanyPost.create({

            technologiesId,
            experience,
            typeof_contract,
            companyId,
            descripcion,
            min_salary,
            max_salary,
            modality          
        })
        
        
        return "Post created!"
    } catch (error) {
        console.log(error)
    }}

module.exports = {
    createPost
}