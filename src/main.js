import { Client, Events, GatewayIntentBits } from 'discord.js'
import vueinit from "@/core/vue"
import dotenv from "dotenv"
import {loadCommands,loadEvents} from "@/core/loader"
import {useAppStore} from "@/store/app"


vueinit()//做pinia的初始化
dotenv.config()
loadCommands()

const appstore = useAppStore()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
appstore.client = client

loadEvents()


client.login(process.env.TOKEN);