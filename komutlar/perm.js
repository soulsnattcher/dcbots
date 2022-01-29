const {MessageEmbed} = require("discord.js")

exports.run = (client, db, args, collection, msg)=>{
    var perm

    if(msg.member.hasPermission("MANAGE_MESSAGES")){
        perm = ":white_check_mark: Mesajları yönet: mesajlar üzerinde işlem yapabilmenizi sağlar."
    }else{
        perm = ":negative_squared_cross_mark: Mesajları yönet: mesajlar üzerinde işlem yapabilmenizi sağlar."
    }
    if(msg.member.hasPermission("MANAGE_ROLES")){
        perm = ":white_check_mark: Rolleri yönet: roller üzerinde işlem yapabilmenizi sağlar."
    }else{
        perm = ":negative_squared_cross_mark: Rolleri yönet: roller üzerinde işlem yapabilmenizi sağlar."
    }
    msg.channel.send(
        new MessageEmbed()
        .setTitle("Yetkileriniz")
        .setDescription(perm)
    )
}

exports.description = "yetkilerinizi gösterir."