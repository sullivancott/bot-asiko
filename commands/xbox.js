const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `xbox`
    },
    run: async (bot, message, args) => {

        var UserNam = message.author.tag
        
        let embed = new MessageEmbed()
            .setTitle(`Voila ton **Xbox**`)// Le titre du message
            .setColor(`#F20a0a`)// Le couleur du message
            .setFooter(`By Navillus#5106`)// Ton footer
            .setTimestamp()
            .addField(`Check dans tes **DM** **!**(Message priver)` , `${UserNam}`)

        message.channel.send(embed)

        message.author.send(`**Asiko** : Voici Ton **Xbox** : https://link-to.net/228112/Xbox`);

    }
}