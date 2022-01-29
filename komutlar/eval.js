const {MessageEmbed} = require("discord.js")
exports.run = (client, db, args, collection, msg)=>{
    if(msg.author.id != client.config.owner && msg.author.id != client.config.owner2) return msg.channel.send(new MessageEmbed()
    .setTitle("Yetersiz Yetki")
    .setDescription("Bu komutu kullanmak için yetkini bulunmamaktadır.")
    )
try{
    msg.channel.send(new MessageEmbed()
    .setTitle("Eval")
    .setDescription(`Girdi:\n${args.join(" ")}\nÇıktı:\n${eval(args.join(" ").toString())}`)
    )
}catch(err){
    console.log(err)
}

}