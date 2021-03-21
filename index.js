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
client.on('ready', () =>{ 
    console.log('client is ready');

    // ping command
    command(client, 'ping', message => {
        message.channel.send('Pong');
    });
});


// log in to discord 
client.login(configs.token);