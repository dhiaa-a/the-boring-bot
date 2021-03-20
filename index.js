/**
 * Home file for the bot
 * 
 * @author Dororo
 */

// dependencies
const Discord = require('discord.js');
const config = require('./config');

// initiate the client
const client = new Discord.Client();

// client listeners
client.on('ready', () => console.log('client is ready'));


// log in to discord 
client.login(config.token);


