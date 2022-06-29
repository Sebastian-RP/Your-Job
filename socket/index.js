const io = require('socket.io')(8900,{
    cors: {
        origin:"http://your-job-seven.vercel.app"
    }
})

let users = []
const addUser = (userId,socketId) => {
    !users.some(user=>user.userId ===  userId) &&
    users.push({ userId, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user=> user.socketId !== socketId)
}
const getUser = (userId)=> {
    return users.find(user => user.userId === userId)
}


// CUANJDO UN USUARIO SE CONECTA
io.on("connection", (socket) => {
    socket.on("addUser", (userId) => {
        addUser(userId, socket.id)
        io.emit("getUsers", users)
    });

    // ENVIAR Y RECIBIR MENSAJES
    socket.on("sendMessage", ({sender, receiverId, texto}) => {
    const user = getUser(receiverId);
        io.to(user?.socketId).emit("getMessage", { sender, texto })
    })



// CUANDO UN USUARIO SE DESCONECTA
    socket.on("disconnect", () => {
        removeUser(socket.id);
        io.emit("getUsers", users)
    })
})
