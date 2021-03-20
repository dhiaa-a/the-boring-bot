/**
 * Home file for the bot
 * 
 * @author Dororo
 */

// dependencies
const Discord = require('discord.js');

// initiate the client
const client = new Discord.Client();

// client listeners
client.on('ready', () => console.log('client is ready'));


// log in to discord 
client.login(process.env.TOKEN || require('./config.js').token);