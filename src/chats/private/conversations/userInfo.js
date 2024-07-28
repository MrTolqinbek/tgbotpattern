const User = require("../../../database/models/users");
module.exports = async function greeting(conversation, ctx) {
  await ctx.reply("enter name");
  const {
    msg: { text: name },
  } = await conversation.waitFor("message:text");

  await ctx.reply("enter familyName");
  const {
    msg: { text: family },
  } = await conversation.waitFor("message:text", async (ctx) => {
    await ctx.reply("familyName must be string");
  });
  await ctx.reply("enter age");

  const age = await conversation.form.int();
  await ctx.reply("enter telephone number");
  const {
    msg: { text: telephone },
  } = await conversation.waitForHears(/^\+998\d{9}$/, async (ctx) => {
    await ctx.reply("telephone number must be in the format +998XXXXXXXXX");
  });

  await User.create({
    telegramId: ctx.message.from.id,
    firstName: name,
    lastName: family,
    age: age,
    userName: ctx.message.from.username,
    telephone: telephone,
  });
  await ctx.reply("Welcome to my bot");
};
