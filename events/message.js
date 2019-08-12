// Include: kick
const kick = require("../commands/kick");

module.exports = (client, message) => {
  // Kick Message
  if (message.content.startsWith("/c kick")) {
    return kick(message);
  }

  // Ping-Pong
  if (message.content === 'ping') {
    message.reply('Pong!')
  }
};
