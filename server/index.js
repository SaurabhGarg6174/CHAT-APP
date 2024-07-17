const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const messageRoute = require("./routes/messagesRoute");
const socketIo = require("socket.io");
require("dotenv").config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoute);

//Database Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("DB connection success");
    })
    .catch((err) => {
        console.log(err.message);
    });

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server PORT = ${PORT}`)
});

//Socket.io
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    global.chatSocket = socket;

    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
        console.log(`User ${userId} added with socket ID ${socket.id}`);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-receive", data.message);
            console.log(`Message sent from ${data.from} to ${data.to}`);
        }
    });

});
