import {Events} from "discord.js"
import {useAppStore} from "@/store/app"

export const event = {
    name: Events.InteractionCreate,
    once: false
}

export const action = async(inter) => {
    if(!inter.isChatInputCommand())return //確定是斜線指令才繼續
    const appstore = useAppStore()
    const action = appstore.commandsActionMap.get(inter.commandName)
    await action(inter)
}