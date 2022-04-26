const { MessageEmbed } = require("discord.js");
const fivem = require("fivem-server-stats")

module.exports = {
    name: 'check',
   async execute(client, message, args) {
       //server ip
       let server = "";
       
       if(!server) return message.channel.send(":x: Error: No server linked at commands/check.js, line 8 contact, bot administrator for fixing!")
        
        //Server all info
let data = await fivem.getInfo(`${server}`).catch(err=> {return message.channel.send(`${err}`)})
let data2 = await fivem.getPlayerLength(`${server}`).catch(err=> {return message.channel.send(`${err}`)})

       //Embed 1
let embed = new MessageEmbed()
        .setTitle("Status")
        .setDescription(`**Server name:** ${data.vars.sv_projectName}\n **Server description:** ${data.vars.sv_projectDesc}\n **Server Tags:** ${data.vars.tags}\n **Game:** ${data.vars.gamename}\n **Server's discord:** ${data.vars.Discord}`)
        .setColor("RANDOM")
        .setFooter("FiveM Checker Bot")
     //Embed 2
let embed2 = new MessageEmbed()
.setTitle("**Player's info**")
.setDescription(`**Players:** ${data2}\n **Max Players:** ${data.vars.sv_maxClients}\n`)
.setColor("RANDOM")
.setFooter("FiveM Checker Bot")
        //embed 3
        let embed3 = new MessageEmbed()
        .setTitle("**Server Banner**")
        .setImage(`${data.vars.banner_detail}`)
        .setColor("RANDOM")
        .setFooter("FiveM Checker Bot")
        //message sending
        message.channel.send({
            embeds: [embed, embed2 ,embed3]
        })

        
    }
}