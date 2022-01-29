const {MessageEmbed} = require("discord.js")
exports.run = (client, db, args, collection, msg)=>{


    var mention = msg.mentions.roles.first().id || args[1]
    if(!mention) return
    if(args[0] == "kayıtsız"){
        db.set(`kayıtsız-rol_${msg.guild.id}`, mention)
        if(db.get(`kayıtsız-rol_${msg.guild.id}`) == mention){
            msg.channel.send(
                new MessageEmbed()
                .setTitle("Kayıt Sistemi")
                .setDescription("Kayıtsız rol ayarlandı")
            )
        }
    }else if(args[0] == "kayıtlı"){
        db.set(`kayıtlı-rol_${msg.guild.id}`, mention)
        if(db.get(`kayıtlı-rol_${msg.guild.id}`) == mention){
            msg.channel.send(
                new MessageEmbed()
                .setTitle("Kayıt Sistemi")
                .setDescription("Kayıtlı rol ayarlandı")
                .setFooter(msg.author.tag, msg.author.avatarURL(), true)
            )
        }
    }
}

exports.description = "kayıt sistemini ayarlamanızı sağlar."