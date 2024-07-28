const { Bot, Context, session } = require("grammy");
const Private = require("./chats/private/index");

const { conversations } = require("@grammyjs/conversations");

const bot = new Bot(process.env.TOKEN);
bot.use(session({initial:()=>{
    return {}
}}));
bot.use(conversations());
bot.chatType("private").use(Private);
module.exports = bot;
