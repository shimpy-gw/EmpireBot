const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const PREFIX = "g-";

var bot = new Discord.Client();

var fortunes = [
   "Oui",
   "Non",
   "Peut être",
   "Je pense que oui",
   "Je pense que non",
   "Je ne sais pas"
];


function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setPresence({ game: { name: "Bienvenue 》 V.1", url: "https://www.twitch.tv/shimpyishere", type: 1 } })
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
            message.channel.sendMessage("Pong");
            break;
        case "8ball":
            if (args [1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Je ne peut pas lire ton message");
            break;
        case "play":
            if (!args[1]) {
                message.channel.sendMessage("Merci de mettre un lien pour pouvoir écouter de la musique.");
                return;
            }

            if (!message.member.voiceChannel) {
                message.channel.sendMessage("Vous devez être dans un salon vocal.");
                return;
            }

            if(!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            };

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                play(connection, message);
            });
            break;
        case "skip":
           var server = servers[message.guild.id];
           
           if (server.dispatcher) server.dispatcher.end();
           break;
        case "stop":
           var server = servers[message.guild.id];

           if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
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


bot.login(process.env.TOKEN)

