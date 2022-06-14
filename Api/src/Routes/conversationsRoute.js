const { Router } = require("express");
const { createConversation,
        getConversation,
        createText } = require("../Controllers/ConversationController.js");
const router = Router();



router.post("/", async (req, res) => {
    const { senderId, receiverId } = req.body
    const conversation = await createConversation(
            senderId,
            receiverId
        );
    res.status(200).json(conversation)
})

router.put("/text", async(req,res) => {
    const {  texto, id, senderId } = req.body
    const message = await createText(id,texto, senderId)
    res.status(200).json(message)
})

router.get("/:userId", async (req,res) => {
    const { userId } = req.params
    const getConver = await getConversation(userId)
    res.status(200).send(getConver)
})

module.exports = router;