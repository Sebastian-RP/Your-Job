const { Conversation } = require("../db.js");

const createText = async (id, texto, senderId) => {
  try{
    let date = new Date
    date = `${date.getHours()}: ${date.getMinutes()}`
    let conversacion = await Conversation.findByPk(id)
    let message = [{sender: senderId, texto: texto, hour: date }]
  if(conversacion.text === null){
      await conversacion.update({
      text: [message]
    })
    return message
  } else if (conversacion.text){
    let edit = conversacion.text[0].concat(message)
    await conversacion.update({
      text: [edit]
    })
    return message
    }
    }catch(error){
    console.error("Error in createText:", error);
    }
}

const createConversation = async (senderId, receiverId) => {
  try {
      const newConversation = await Conversation.findOrCreate({
         where: { members: [senderId, receiverId] } 
        })
      let mapValues = newConversation.map(x=>x.dataValues)
      return mapValues;
    } catch (error) {
      console.error("Error in createConversation:", error);
    }
  };
  const getConversation = async (userId) => {
    try{
      const conversation = await Conversation.findAll({
         members: [userId] 
      })
      let mapValues = conversation.map(x=>x.dataValues)
      let onlyUser = mapValues.filter(user => user.members.includes((userId)))

      return onlyUser
    }catch (error){
      console.error("Error in getConversation:", error);
    }
  }

  const conversationById = async(ID) => {
    try{
      const conversation = await Conversation.findByPk(ID)
      return conversation
    }catch (error){
      console.error("Error in conversationById:", error);
    }
  }

module.exports = {
    createConversation,
    getConversation,
    createText,
    conversationById
  };
  