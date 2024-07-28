const { Composer } = require("grammy");
const User = require("../../../database/models/users");
const bot = new Composer();
const { createConversation } = require("@grammyjs/conversations");
const userInfo = require("../conversations/userInfo");
bot.use(createConversation(userInfo, "userInfo"));
bot.command("start", async (ctx) => {
  const user = await User.findOne({
    where: { telegramId: ctx.message.from.id },
  });

  if (!user) {
    result = await ctx.conversation.enter("userInfo");
  } else {
    await ctx.reply("Welcome to my bot");
  }
});
module.exports = bot;
