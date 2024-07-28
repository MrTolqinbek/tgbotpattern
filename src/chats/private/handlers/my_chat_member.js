const { Composer } = require("grammy");

const bot = new Composer();

bot.on("my_chat_member", async (ctx) => {
    console.log(ctx.myChatMember)
    // console.log(ctx)
  const { chat, from } = ctx;
//   console.log(from)
});
module.exports = bot;
