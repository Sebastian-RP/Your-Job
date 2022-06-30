const { Router } = require("express");
const {
  createConversation,
  getConversation,
  createText,
  conversationById,
} = require("../Controllers/ConversationController.js");
const cors = require("cors");
const router = Router();
router.use(
  cors({
    origin: true,
    credentials: true,
  })
);

router.post("/", async (req, res) => {
  const { senderId, receiverId, texto, id } = req.body;
  if (receiverId) {
    const conversation = await createConversation(senderId, receiverId);
    res.status(200).json(conversation);
  } else if (texto && id) {
    const message = await createText(id, texto, senderId);
    res.status(200).json(message);
  }
});

router.get("/id/:ID", async (req, res) => {
  const { ID } = req.params;
  const getUser = await conversationById(ID);
  res.status(200).send(getUser);
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const getConver = await getConversation(userId);
  res.status(200).send(getConver);
});

module.exports = router;
