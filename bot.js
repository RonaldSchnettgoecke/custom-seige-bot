const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjExNjk0NzA5OTAzMDY1MDkw.XVXqtg.-mHHUNh_I_4TOetJwBCSYTSd0tU';

const PREFIX = '!';

bot.on('ready', () =>{
        console.log('This bot is online!')
        bot.user.setActivity('Ela Porn', {type : "WATCHING" })
})

bot.on('message', message=>{ 

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'siege':
            if(args[1] === 'rules'){
                const embed = new Discord.RichEmbed()
                .setTitle('RULES')
                .setColor(0xD4AC0D)
                .setURL("https://docs.google.com/document/d/14DS0TQPdT8ZtTwYcqKhvzs1FY8FUCK4BWrVkrJ1g4y8/edit")
                message.channel.sendEmbed(embed);
        break;
            }
        case 'siege':
            if(args[1] === 'stats'){
                const embed = new Discord.RichEmbed()
                .setTitle('STATS')
                .setColor(0x2980B9  )
                .setURL("https://docs.google.com/spreadsheets/d/1B58wy_78kpOvh4zWqEipIcFVqwUkcLMpglhv4aD6v68/edit#gid=0")
                message.channel.sendEmbed(embed);
        break;
            }
        case 'top':
            if(args[1] === 'kills'){
                const embed = new Discord.RichEmbed()
                .setTitle('TOP KILLS')
                .setDescription('TheEpicPickle (1)')
                .setColor(0x145A32)
                .setThumbnail(url="https://ubistatic2-a.akamaihd.net/uplay-webcenter/prod/images/gallery/216_256_256.png")
                message.channel.sendEmbed(embed);
        break;
            }
        case 'top':
                if(args[1] === 'wins'){
                    const embed = new Discord.RichEmbed()
                    .setTitle('TOP WINS')
                    .setDescription('TheEpicPickle (7)')
                    .setThumbnail(url="https://ubistatic2-a.akamaihd.net/uplay-webcenter/prod/images/gallery/216_256_256.png")
                    .setColor(0x145A32)
                    message.channel.sendEmbed(embed);
            }
        case 'top':
                if(args[1] === 'overall'){
                    const embed = new Discord.RichEmbed()
                    .setTitle('TOP OVERALL')
                    .setDescription('TheEpicPickle (20)')
                    .setThumbnail(url="https://ubistatic2-a.akamaihd.net/uplay-webcenter/prod/images/gallery/216_256_256.png")
                    .setColor(0x145A32)
                    message.channel.sendEmbed(embed);
            }
        case 'top':
                if(args[1] === 'loses'){
                    const embed = new Discord.RichEmbed()
                    .setTitle('TOP LOSES')
                    .setDescription('DSully25 (1)')
                    .setThumbnail(url="https://ubistatic2-a.akamaihd.net/uplay-webcenter/prod/images/gallery/408_256_256.png")
                    .setColor(0x7B241C)
                    message.channel.sendEmbed(embed);
            }
        case 'top':
                if(args[1] === 'deaths'){
                    const embed = new Discord.RichEmbed()
                    .setTitle('TOP DEATHS')
                    .setDescription('DSully25 (5)')
                    .setThumbnail(url="https://ubistatic2-a.akamaihd.net/uplay-webcenter/prod/images/gallery/408_256_256.png")
                    .setColor(0x7B241C)
                    message.channel.sendEmbed(embed);
            }
            
            
    }
})

client.login(process.env.BOT_TOKEN);
