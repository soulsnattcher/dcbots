const {NessageEnbed} = require("discord.js")
module.exports.run = (client, args, db, collection, msg)=>{
    if(msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(
    	new MessageEmbed()
        .setTitle("Yetersiz yetki")
        .setDescription("Bu komutu kullanabilmek için ADMINISTRATOR(Yönetici) yetkisine sahip olman gerekiyor.")
    )
    if(args[0] == "ayarla"){
        var kanal = msg.mentions.channels.first().id || args[1]
        if(!kanal){
            var prefix = db.get("prefix_" + msg.guild.id) || client.prefix
            msg.channel.send(
            	new MessageEmbed()
            	.setTitle("Hatalı kullanım")
            	.setDescription("Doğru Kullanım: \n " + prefix + "bildirim [ayarla/kapat] <kanal id> \n Not: eğer kapat yazarsanız id girmenize gerek yoktur. \n[]: tercihen \n <> gerekli")
            )
        }else if(kanal){
            db.set("bildirim-kanal_" + msg.guild.id, kanal)
        }
    }
}

module.exports.description = "Botun alık bildirimleri sunucu kanalınızda görüntülemenizi sağlar."