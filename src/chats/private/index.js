const { Composer } = require("grammy");
const start = require("./commands/start");
const my_chat_member = require("./handlers/my_chat_member");
const bot = new Composer();


bot.use(start);
bot.use(my_chat_member);

module.exports = bot;
