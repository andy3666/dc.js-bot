import{SlashCommandBuilder} from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('ping')
.setDescription('ping command')
export const avtion = async(interaction)=>{
    await interaction.reply('pong!')
}

//export default{
//    command: new SlashCommandBuilder()
//    .setName('ping')//指令名稱英文只能用小寫，且不能有 - 或 _ 特殊符號
//    .setDescription('ping command'),
//   
//    action: async(interaction)=>{
//        await interaction.reply('pong!')
//}
//} 