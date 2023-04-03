import{SlashCommandBuilder} from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('function-js')
.setDescription('give js function information')
export const avtion = async(interaction)=>{
    await interaction.reply(`函式是物件的一種
            其主要形式:const 函式名稱 = function (參數,參數,......) {
                   return 要回傳的值;
                }
            ()中的是參數,{}中的是需要重複執行的程式
            延伸:箭頭函式
            箭頭函式沒有自己的 this、arguments、super、new.target (en-US) 等語法。
            本函式運算式適用於非方法的函式,但不能被用作建構式(constructor)。
            主要形式:1.const 函式名稱 = (參數,參數,......) => 表示式,
                其相當於const 函式名稱 = (參數,參數,......) => {return 表示式}
                     2.const 函式名稱 = (參數,參數,......)=>{陳述式}`
            )
}

//export default{
//    command: new SlashCommandBuilder()
//    .setName('function-js')
//    .setDescription('give js function information'),
//    
//    action: async(interaction)=>{
//        await interaction.reply(`函式是物件的一種
//        其主要形式:const 函式名稱 = function (參數,參數,......) {
//               return 要回傳的值;
//            }
//        ()中的是參數,{}中的是需要重複執行的程式
//        延伸:箭頭函式
//        箭頭函式沒有自己的 this、arguments、super、new.target (en-US) 等語法。
//        本函式運算式適用於非方法的函式,但不能被用作建構式(constructor)。
//        主要形式:1.const 函式名稱 = (參數,參數,......) => 表示式,
//            其相當於const 函式名稱 = (參數,參數,......) => {return 表示式}
//                 2.const 函式名稱 = (參數,參數,......)=>{陳述式}`
//          )
//}
//} 