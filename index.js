/**
 * Home file for the bot
 * 
 * @author dhiaajhamed
 */

// dependencies
const Discord = require('discord.js');

const configs = require('./config');
const command = require('./command')

// initiate the client
const client = new Discord.Client();

// client listeners
client.on('ready', () => {
    console.log('client is ready');

    // ping command
    command(client, 'ping', message => {
        message.channel.send('Pong');
    });

    // list invited servers and show their members count
    command(client, 'servers', message => {
        client.guilds.cache.forEach(guild => {
            message.channel.send(`${guild.name}: ${guild.memberCount} members`);
        });
    });

    // delete all messages within a channel
    command(client, ['cc', 'clearchannel'], message => {
        // author must be admin
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then(messages => {
                message.channel.bulkDelete(messages);

                // delete message after 3 seconds of sending
                message.channel.send(`${messages.size} messages has been deleted!`).then(msg => msg.delete({ timeout: 3000 })).catch(console.error);
            });
        }
    });
});


// log in to discord 
client.login(configs.token);