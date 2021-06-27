const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const Document = require("./Document")

// Configures the environment so we can have it in the .env file
require('dotenv').config();

// Cors middleware
app.use(cors());
app.use(express.json()); // Allow us to parse json
// Server will send and receive json

// database uri, get from mongodb from the dashboard
// ATLAS_URI is the envionrment variable, we need to set it (backend/.env)
const uri = process.env.ATLAS_URI;
// The flags deal with mongodb
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
//mongoose starts the connection
const connection = mongoose.connection;
// once the connection is open, it will log that
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Starts the server: listens to the port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

mongoose.connect("mongodb://localhost/google-docs-clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

const defaultValue = ""

io.on("connection", socket => {
  socket.on("get-document", async documentId => {
    const document = await findOrCreateDocument(documentId)
    socket.join(documentId)
    socket.emit("load-document", document.data)

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data })
    })
  })
})

async function findOrCreateDocument(id) {
  if (id == null) return

  const document = await Document.findById(id)
  if (document) return document
  return await Document.create({ _id: id, data: defaultValue })
}
