const {MessageEmbed} = require("discord.js")
const moment = require("moment")
const format = require("moment-duration-format")
exports.run = (client, db, args, collection, msg) =>{
    const süre = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]"); 
    msg.channel.send(
        new MessageEmbed()
        .setTitle("Bot bilgi")
        .setDescription(
            `
Bot sahibi: ${client.users.cache.get(client.config.owner).tag}
Nodejs sürümü: ${process.version}
Discord.js sürümü: V${client.config.modules["discord.js"].slice(1)}
Kullanılan modüller: Discord.js, Wio.db, Express, node:fs
Sunucu sayısı: ${client.guilds.cache.size}
Kanal sayısı: ${client.channels.cache.size}
Kullanıcı sayısı: ${client.users.cache.size}
Çalışma zamanı: ${süre}
Ping: ${client.ws.ping}
            `
        )
        .setFooter(msg.author.tag, msg.author.avatarURL(), true)
    )
}

exports.description = "Bot hakkındaki bilgileri verir."