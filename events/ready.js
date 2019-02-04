const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);

//  console.log(`Bot sunucularda aktif oldu ${client.user.tag}!`)
  console.log(`Bot şuanda ${client.guilds.size} sunucuda, ${client.users.size} kullanıcıya, ${client.channels.size} kanalda hizmet veriyor.`)
  client.user.setStatus("dnd");
  client.user.setActivity('-- Oyun Stüdyosu Server Botu --', { type: "WATCHING" })
//  client.channels.get('506893598193745980').send("Bot aktif oldu.")
  
//İzliyor: WATCING
//Oynuyor: PLAYING
//Dinliyor: LISTENING
  
;
}