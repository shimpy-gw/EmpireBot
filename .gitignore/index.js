const Discord = require("discord.js");

const PREFIX = ";";

var bot = new Discord.Client();

var fortunes = [
   "Oui",
   "Non",
   "Peut être",
   "Je pense que oui",
   "Je pense que non",
   "Je ne sais pas"
];


var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setPresence({ game: { name: "Games World | ;help", url: "https://www.twitch.tv/shimpyishere", type: 1 } })
    bot.user.setStatus("idle");
    console.log("Ready");
});

bot.on("message", function(message) {
    
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
            message.channel.sendMessage("Toutes les informations sont disponibles dans un salon dédié.");
            break;
        case "ping":
            message.channel.sendMessage(':ping_pong: `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
            break;
        case "8ball":
            if (args [1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Je ne peut pas lire ton message");
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .addField("Fun", "`8ball` - Réponses aléatoires")
                .addField("Autres", "`info` - Avoir des informations \n `ping` - Votre ping entre vous et le serveur ")
                .addField("Liens", "[Chaîne de Momo](https://www.youtube.com/channel/UCPM0ideFVNEDArbwSpGe6Ew) \n [Chaîne de Shimpy](https://www.youtube.com/channel/UC3qkGuSTC7dxMaS6KE_AGuQ) \n [Lien du serveur discord](https://discord.gg/h5aRW32)")
                .setAuthor("Games World", "https://images-ext-1.discordapp.net/external/JYr7pb9AhR6DgG3SiBwlNwUm62FWK2eCOY8E7sWOHi0/https/discordapp.com/api/guilds/460036787080003585/icons/feb3efde418f21cb67184eee6b827cc5.jpg")
                .setColor("#01AEE3")
                .setFooter("Crée par Shimpy#9999")
                .setThumbnail(message.author.avatarURL)
                .setTimestamp()
            message.channel.sendEmbed(embed);
            break;
        case "kick":
            if (!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")) {
            var embed = new Discord.RichEmbed()
                .setTitle("Erreur")
                .setDescription("Tu ne possèdes pas la permission de kick !")
                .setAuthor("Games World", "https://images-ext-1.discordapp.net/external/JYr7pb9AhR6DgG3SiBwlNwUm62FWK2eCOY8E7sWOHi0/https/discordapp.com/api/guilds/460036787080003585/icons/feb3efde418f21cb67184eee6b827cc5.jpg")
                .setColor("#B9121B")
                .setFooter("Crée par Shimpy#9999")
                .setTimestamp()
            message.channel.sendEmbed(embed);
        }else{ 
            var member = message.mentions.member.firsts();
            if(!member) {
               var embed = new Discord.RichEmbed()
                   .setTitle("Erreur")
                   .setDescription("L'utilisateur n'éxiste pas !")
                   .setAuthor("Games World", "https://images-ext-1.discordapp.net/external/JYr7pb9AhR6DgG3SiBwlNwUm62FWK2eCOY8E7sWOHi0/https/discordapp.com/api/guilds/460036787080003585/icons/feb3efde418f21cb67184eee6b827cc5.jpg")
                   .setColor("#B9121B")
                   .setFooter("Crée par Shimpy#9999")
                   .setTimestamp()
               message.channel.sendEmbed(embed);
        }else{
            if(!member.kickable){
                var embed = new Discord.RichEmbed()
                    .setTitle("Erreur")
                    .setDescription("Impossible de kick l'utilisateur")
                    .setAuthor("Games World", "https://images-ext-1.discordapp.net/external/JYr7pb9AhR6DgG3SiBwlNwUm62FWK2eCOY8E7sWOHi0/https/discordapp.com/api/guilds/460036787080003585/icons/feb3efde418f21cb67184eee6b827cc5.jpg")
                    .setColor("#B9121B")
                    .setFooter("Crée par Shimpy#9999")
                    .setTimestamp()
                message.channel.sendEmbed(embed);
        }else{
            member.kick().then((member) => {
                var embed = new Discord.RichEmbed()
                    .setTitle("Succès")
                    .setDescription(`${member.displayName} à été kick avec succès !`)
                    .setAuthor("Games World", "https://images-ext-1.discordapp.net/external/JYr7pb9AhR6DgG3SiBwlNwUm62FWK2eCOY8E7sWOHi0/https/discordapp.com/api/guilds/460036787080003585/icons/feb3efde418f21cb67184eee6b827cc5.jpg")
                    .setColor("#96CA2D")
                    .setFooter("Crée par Shimpy#9999")
                    .setTimestamp()
                message.channel.sendEmbed(embed);
            }).catch(() => {
                var embed = new Discord.RichEmbed()
                    .setTitle("Erreur")
                    .setDescription("Le kick à été refusé !")
                    .setAuthor("Games World", "https://images-ext-1.discordapp.net/external/JYr7pb9AhR6DgG3SiBwlNwUm62FWK2eCOY8E7sWOHi0/https/discordapp.com/api/guilds/460036787080003585/icons/feb3efde418f21cb67184eee6b827cc5.jpg")
                    .setColor("#B9121B")
                    .setFooter("Crée par Shimpy#9999")
                    .setTimestamp()
                message.channel.sendEmbed(embed);
            })
            }
        }
        }
        break;
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Bonjour") {
        message.channel.sendMessage("Hey, comment ça va ?");
    }

    if (message.content == "bonjour") {
        message.channel.sendMessage("Hey, comment ça va ?");    
    }
    
    if (message.content == "Coucou") {
        message.channel.sendMessage("Hey, comment vas-tu ?"); 
    }

    if (message.content == "coucou") {
        message.channel.sendMessage("Hey, comment vas-tu ?"); 
    }

    if (message.content == "très bien et toi ?") {
        message.channel.sendMessage("Je vais très bien aussi."); 
    }

    if (message.content == "Très bien et toi ?") {
        message.channel.sendMessage("Je vais très bien aussi."); 
    }

    if (message.content == "salut") {
        message.channel.sendMessage("Hey, comment vas-tu ?"); 
    }

    if (message.content == "Salut") {
        message.channel.sendMessage("Hey, comment vas-tu ?");
    }


    if(message.content.includes('fdp') || message.content.includes('ntm') || message.content.includes('fils de pute') || message.content.includes('nique ta mère')){
        if(message.channel.name = "general") {
            message.delete();
            message.author.send("Désolé, mais les **insultes** ne sont pas autorisé sur le serveur !");
        }else{
            //ignore
        }


    }
});

bot.login(process.env.TOKEN);
