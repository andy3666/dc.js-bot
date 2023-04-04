//註冊事件與程式

import {REST,Routes,Collection} from "discord.js"
import fg from "fast-glob"
import {useAppStore} from "@/store/app"

const updateSlashCommands = async(commands) =>{
    const rest = new REST({version: 10,}).setToken(process.env.TOKEN)
    const files = await fg('./src/guilds/**/index.js')
    for (const file of files){
        const guildid = await import (file)
        const result = await rest.put(
            Routes.applicationGuildCommands(
                process.env.applicationid,
                guildid.id,
            ),
            {
                body:commands,
            },
        )
    console.log(result)
    }
}

export const loadCommands = async() => {
    const appstore = useAppStore
    const commands = []
    const actions = new Collection()//dc.js中提供的一個資料夾結構
    const files = await fg('./src/commands/**/*.js')
    for (const file of files){
        const cmd = await import (file)
        commands.push(cmd.command)
        actions.set(cmd.command.name,cmd.action)
    }
    await updateSlashCommands(commands)
    appstore.commandsActionMap = actions

    console.log(appstore.commandsActionMap)
    }


export const loadEvents = async() =>{
    const appstore = useAppStore()
    const client = appstore.client
    const files = await fg('./src/events/**/*.js')
    for (const file of files){
        const eventFiles = await import (file)
        if (eventFiles.event.once){
            client.once(eventFiles.event.name,eventFiles.action)
        }else {
            client.on(eventFiles.event.name,eventFiles.action)
        }
        
        
    }
}