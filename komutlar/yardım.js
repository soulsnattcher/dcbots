const {MessageEmbed, Message} = require("discord.js")
exports.run = (client, db, args, collection, msg)=>{
    var description = ""
    collection.forEach((val, key) => {
        if(val == "eval" || key == "eval") return
        description = description + client.config.prefix + key + ": " + require("./" + val).description + "\n"
    })
    const embed = new MessageEmbed()
    .setTitle("Yardım Menüsü")
    .setDescription(description)
    .setFooter(msg.author.username, msg.author.avatarURL(), true)
    msg.channel.send(embed)
}

exports.description = "yardım menüsünü açar."