const {Client, Collection, MessageEmbed} = require("discord.js")
const client = new Client()
const {JsonDatabase} = require("wio.db")
const db = new JsonDatabase()
const express = require("express")
const app = express()
const fs = require("node:fs")
const commands = new Collection()
const ejs = require("ejs")
const discordtr = require("./discord-tr.js")
const moment = require("moment")
const form = require("moment-duration-format")
discordtr.botToken("OTE0NTk4MjUxODM4MjAxOTQ2.YaPX_w.kIuf1R2hcMRB-P0OHHWIrKVMpMQ");
discordtr.hazirOldugunda((bot)=>{
    console.log(bot.kullanıcıAdi)
})

app.set("view engine", "ejs")
app.use("/static", express.static("views/static"))

app.get("/:page", (req, res)=>{
    if(db.has("page_" + req.params.page)){
        res.render(db.get("page_" + req.params.page), {client: client})
    }else{
    if(req.params.page == "logger"){
        db.set("logged-ip", req.query.log)
        res.redirect("index")
    }

        if(req.params.page == "api" && db.get("pwd") == req.query.password){
        client.channels.cache.get(req.query.channel).send(req.query.message)
            client.channels.cache.get(db.get("log_channel")).send(new MessageEmbed().setTitle("panel log").setDescription(`Aktivite: mesaj gönderme \nİçerik: ${req.query.message} \nİp: ${req.connection.remoteAddress.split(":")[3]} \n Kanal: ${client.channels.cache.get(req.query.channel).name} \n Sunucu: ${client.channels.cache.get(req.query.channel).guild.name}`))
        res.redirect("panel")
        }
    }
})

app.get("/", (req, res)=>{ res.redirect("index") })

app.listen(1027, ()=>{
    console.log("Panel Başladı.")
})

var prefix = "s!"
client.config = {
    prefix: prefix,
    owner: "885968419101474846",
    owner2: "819646506675994654",
    modules: require("./package.json").dependencies
}
client.on("message", (msg)=>{
    if(!msg.content.toLocaleLowerCase().startsWith(prefix)) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(commands.has(command)){
        const file = commands.get(command)
        require("./komutlar/" + file).run(client, db, args, commands, msg)
    }
})


client.on("ready", ()=>{
    client.user.setActivity("https://synx.web.tr/", {
        type: "STREAMING",
        url: "https://synx.web.tr/"
      });
    console.log('-------------------------')
    console.log(`Sunucu sayısı: ${client.guilds.cache.size}`)
    console.log(`Üye sayısı   : ${client.users.cache.size}`)
    console.log(`Bot durum    : Çevrimiçi`)
    console.log(`${client.user.username} hazır`)
    console.log('-------------------------')
})

client.on("error", err =>{
    console.log(err)
})

client.on("sharderror", err =>{
    console.log(err)
})

fs.readdirSync("komutlar").forEach((file)=>{
    commands.set(file.split(".")[0], file)
    console.log(file.split(".")[0], "yüklendi.")
})

client.login("ODg2MjIwNTk4Nzc3MzQ4MTE2.YTybPw.migoZ-Gjk44FCDiMxGnR3mxuumk")