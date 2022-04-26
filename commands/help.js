const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../config.json");

module.exports = {
    name: 'ajutor',
    execute(client, message, args) {
        
        let embed = new MessageEmbed()
        .setTitle(":wave: **Hello, you need helping?**")
        .setDescription(`:question: **My commands:**\n **${PREFIX}help** - Showing that list, with all bots comamnds \n **${PREFIX}status** - Showing fivem server status`)
        .setFooter("Creat by Winq#9608")
        .setColor("RANDOM")
        
        message.channel.send({
            embeds: [embed]
        })
        
    }
}