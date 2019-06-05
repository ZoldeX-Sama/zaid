const Discord = require('discord.js');
const client = new Discord.Client();

const developers = ['324249224969584642'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("idle")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('pl')) {
client.user.setActivity(argresult, {type:'Playing'});
    message.channel.send(`Setting status : **${argresult}**`)
} else 
if (message.content.startsWith('st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/hadeel");
   message.channel.send(`Setting status : **${argresult}**`)
} else
if (message.content.startsWith('ls')) {
   client.user.setActivity(argresult, {type:'Listening'});
    message.channel.send(`Setting status : **${argresult}**`)
} else
if (message.content.startsWith('wt')) {
   client.user.setActivity(argresult, {type:'Watching'});
    message.channel.send(`Setting status : **${argresult}**`)
}
});

var prefix = ".";

client.on('message', message => {
var args = message.content.split(' ').slice(1).join(' ');
    

           if (message.content.startsWith(prefix + "av")) {

                 if (message.author.id !== developers) return;

        var mentionned = message.mentions.users.first();

          var getvalueof;

          var client;

          if(mentionned) {

            getvalueof = mentionned;

          } else {

            getvalueof = message.author;

          }

          let avatar = new Discord.RichEmbed()

          .setColor("#000000")

          .setTitle(`{394029329839283}`)

          .setURL(`${getvalueof.avatarURL}`)

          .setImage(`${getvalueof.avatarURL}`);

                    message.channel.sendEmbed(avatar);

          message.delete(2500);

           }
});

client.login(process.env.BOT_TOKEN);
