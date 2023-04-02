import{SlashCommandBuilder} from 'discord.js'

//export const command = new SlashCommandBuilder()
//.setName('ping')
//.setDescription('ping command')
//export const avtion = async(interaction)=>{
//    await interaction.reply('pong!')
//}

export default{
    command: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('ping command'),
    
    action: async(interaction)=>{
        await interaction.reply('pong!')
}
} 