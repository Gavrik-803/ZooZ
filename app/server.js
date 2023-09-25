const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');

const indexRouter = require('./routes/index');
const eventRouter = require('./routes/event');
const participantRouter = require('./routes/participant');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', indexRouter);
app.use('/event', eventRouter);
app.use('/participant', participantRouter);

io.on('connection', (socket) => {
  console.log('User connected');
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = io;