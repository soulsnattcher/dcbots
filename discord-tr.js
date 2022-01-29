var {Client} = require("discord.js");
var client = new Client();
var Embed;
var Token;
var Db;
module.exports = {
    botToken: (token)=>{
        Token = token;
        client.login(token)
    },
    veriTabani: (db)=>{
        Db = db;
    },
    hazirOldugunda: (fonksiyon)=>{
        client.on("ready", ()=>{
            module.exports.bot = {
        		kullanıcı: client.user,
        		kullanıcıAdi: client.user.username
    		}
            fonksiyon({
                kullanıcı: client.user,
                kullanıcıAdi: client.user.username
            });
        })
    }
}