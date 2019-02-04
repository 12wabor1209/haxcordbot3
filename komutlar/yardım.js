const Discord = require("discord.js");
 const ayarlar = require('../ayarlar.json');
const db = require("quick.db"); 
var prefix = ayarlar.prefix

module.exports.run = async (bot, message, args) => {
  
  var komutlar = [
   prefix + "çekiliş    = Sunucu çekilişi için gerekli davet linkini verir.\n" + 
   prefix + "istatistik = Bot hakkındaki bazı istatistikleri verir."  +
   prefix + "öner       = Öneri kanalına öneri gönderir ve oylamaya sunar.."
  // "os.s davet = Sadece yetkililer kullanabilir."
  ];
 
  const yardım = new Discord.RichEmbed()
   .setTitle("Oyun Stüdyosu Yardım")
   .addField("Aktif Bot Komutları:","**" + komutlar + "**", true)
   .setColor("RANDOM")
   .setFooter("Oyun Stüdyosu Server Botu ||" + message.author.username + " tarafından istendi.")
   
  message.channel.send(yardım)
  
  /* 
  var prefix = "/";
  
  var giriş = [
     "**Düzenleniyor..**\n\n"
   ];
  
  var eğlence = [
     "**Eğlence Komutları Düzenleniyor.**\n"
   ];
  
  var moderasyon = [
     "**_Moderasyon Komutları Düzenleniyor.._**\n" 
   ];
  
  var bilgilendirme = [
     
     "Bilgilendirme Komutları Düzenleniyor"
   ];
  
  var müzik = [   
     "Müzik Komutları\n" +
     "**" + prefix + "çal**      =_Müziği başlatmak için kullanılır._\n" +
     "**" + prefix + "kuyruk**   =_Müzik kuyruğunu gösterir._\n" +
     "**" + prefix + "ses **     =_Ses seviyesini 1-10 arasında ayarlar._\n" +
     "**" + prefix + "geç  **    =_Sıradaki müziğe geçer yok ise kanaldan ayrılır._\n" 
   ];
  
  var son = [  
        "**Ekstra Bilgi Düzenleniyor.**"
     ];

  let pages = [`${giriş}`,
              `[❯ Tüm Komutlar]\n\n ${eğlence}`,
              `${moderasyon}`,
              `${bilgilendirme}`,
              `${müzik}`,
              `${son}`,
              ];
  let page = 1; // Sayfa 1
 
 
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.guild.name,bot.user.avatarURL)
  .setFooter(`© 2018 ServerAsistBOT | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setDescription(pages[page-1])
  .setAuthor(message.guild.name,bot.user.avatarURL)
message.channel.send(embed).then(msg => {
 
    msg.react('⬅').then(r => {
      msg.react('➡')
 
      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
 
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 ServerAsistBOT | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`© 2018 ServerAsistBOT | Sayfa ${page} / ${pages.length}`,bot.user.avatarURL)
        msg.edit(embed)
      })
 
    })
  })
  */
}
 
exports.conf = {
  enabled: true, //komutut açtık
  guildOnly: false, //sadece servere özel yapmadık
  aliases: [""], //farklı çağrılar ekledik
  permLevel: 0 //kimlerin kullanabileceğini yazdık (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'yardım', //adını belirledik (kullanmak için gereken komut)
  description: 'Bot hakkındaki istatistikleri verir.', //açıklaması
  usage: 'yardım' //komutun kullanım şekli (mesela hava <bölge>)
};
