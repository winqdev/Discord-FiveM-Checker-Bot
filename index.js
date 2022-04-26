//Packages importing
const Discord = require('discord.js');
const { TOKEN, PREFIX } = require(`./config.json`)
const { readdirSync } = require("fs");
const { join } = require("path");
//Bot settings
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents, partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

//Collections
client.commands = new Discord.Collection();
client.prefix = PREFIX;

//On ready event
client.on("ready", () => {
    console.log("Bot ready!")
    client.user.setActivity("Checking FiveM servers")
    client.user.setStatus("idle")
})
//Message system
client.on("messageCreate", message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(PREFIX)) {
    const args = message.content
      .slice(PREFIX.length)
      .trim()
      .split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    }

    try {
      client.commands.get(command).execute(client, message, args);
      
    } catch (err) {
      console.log(err);
    }
  }
});

//File Loading
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file =>
  file.endsWith(".js")
);
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file));
  client.commands.set(command.name, command);
}

//Client Logging
client.login(TOKEN);