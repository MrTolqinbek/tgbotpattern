const {Menu,MenuRange} = require("@grammyjs/menu");

const main = new Menu("root-menu")
.text("Welcome", (ctx) => ctx.reply("Hi!")).row()
.submenu("Credits", "credits-menu");


const settings = new Menu("credits-menu")
.text("Show Credits", (ctx) => ctx.reply("Powered by grammY"))
.back("Go Back");
// Make it interactive.
main.register(settings);

const menu= new Menu("dynamic");
menu
  .url("About", "https://grammy.dev/plugins/menu").row()
  .dynamic(() => {
    // Generate a part of the menu dynamically!
    const range = new MenuRange();
    for (let i = 0; i < 30; i++) {
      range
        .text(i.toString(), (ctx) => ctx.reply(`You chose ${i}`))
        .row();
    }
    return range;
  })
  .text("Cancel", (ctx) => ctx.deleteMessage());
function generatePayload() {
    return Date.now().toString();
  }
// const menu = new Menu("store-current-time-in-payload")
//   .text(
//     { text: "ABORT!", payload: generatePayload },
//     async (ctx) => {
      // Give the user 5 seconds to undo.
//       const text = Date.now() - Number(ctx.match) < 5000
//         ? "The operation was canceled successfully."
//         : "Too late. Your cat videos have already gone viral on the internet.";
//       await ctx.reply(text);
//     },
//   );

// const menu = new Menu("my-menu-identifier")
  //   .text("A", (ctx) => ctx.reply("You pressed A!")).row()
  //   .text("B", (ctx) => ctx.reply("You pressed B!"));
  // const menu = new Menu("movements")
  //   .text("^", (ctx) => ctx.reply("Forward!")).row()
  //   .text("<", (ctx) => ctx.reply("Left!"))
  //   .text(">", (ctx) => ctx.reply("Right!")).row()
  //   .text("v", (ctx) => ctx.reply("Backwards!"));
  // const menu = new Menu("time", { onMenuOutdated: false })
  //   .text(
  //     () => new Date().toLocaleString(), // button label is current time
  //     (ctx) => ctx.menu.update(), // update time on button click
  //   );