const { MessageEmbed } = require("discord.js");
const config = require(`../../botconfig/config.json`);
var ee = require(`../../botconfig/embed.json`);
const emoji = require("../../botconfig/emojis.json");
module.exports = {
    name: "toggleplaymessage",
    aliases: ["toggleplaymsg", "playmessage", "playmsg"],
    category: "⚙️ Settings",
    description: "Toggles playmessage (same as pruning...). If its true a message of playing a new track will be sent, even if your afk. If false it wont send any message if a new Track plays! | Default: true aka send new Track information",
    usage: "toggleplaymessage",
    memberpermissions: ["ADMINISTRATOR"],
    type: "music",
    run: async (client, message, args, cmduser, text, prefix, player, es, ls, GuildSettings) => {
    
      
      
      //run the code of togglepruning
      let { run } = require("./playmsg");
      run(client, message, args, cmduser, text, prefix, player, es, ls, GuildSettings);
  }
};

/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://discord.gg/milrato
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention him / Milrato Development, when using this Code!
  * @INFO
*/
