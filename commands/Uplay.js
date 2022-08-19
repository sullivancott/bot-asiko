const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `uplay`
    },
    run: async (bot, message, args) => {

        var UserNam = message.author.tag
        
        let embed = new MessageEmbed()
            .setTitle(`Voila ton compte **Uplay**`)// Le titre du message
            .setColor('#F20a0a')// La couleur du message
            .setFooter(`By Navillus#5106`)// Ton footer
            .setTimestamp()
            .addField(`Check dans tes **DM** **!**(Message priver)` , `${UserNam}`)

        message.channel.send(embed)

        message.author.send(`**Asiko** : Voila ton compte **Uplay**  : https://direct-link.net/228112/uplay`);

    }
}