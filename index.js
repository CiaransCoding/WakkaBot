import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config'

const client = new Client({
    intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
})

client.on("ready", () => {
    console.log(`${client.user.tag} is listening!`)
})

client.on('messageCreate', message => {
    if(message.content.toLowerCase().includes('al bhed'))
		message.reply('https://media.tenor.com/2DVqutDcAWQAAAAC/wakka-ffx.gif')
});

client.login(process.env.DISCORD_TOKEN)