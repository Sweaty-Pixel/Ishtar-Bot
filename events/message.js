// Ping-Pong
module.exports = (client, message) => {
  if (message.content === 'ping') {
    message.reply('Pong!')
  }
});


// Kick Message
const kick = require("../commands/kick");

module.exports = (client, message) => {
  if (message.content.startsWith("/c kick")) {
    return kick(message);
  }
};
