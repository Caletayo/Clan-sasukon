//here the event starts
const chalk = require ("chalk")
module.exports = (client, event, id) => {
    console.log(chalk.hex('#FF1B08').bold(` || <==> || [${String(new Date).split(" ", 5).join(" ")}] || <==> || Shard #${id+1} Desconectado || <==> ||`));
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://discord.gg/dcdev
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention him / Milrato Development, when using this Code!
  * @INFO
*/
