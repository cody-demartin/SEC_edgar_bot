require('dotenv').config();
const { prefix, token } = require('./config.json');
const initialSetup = require('debug')('bot:initial_message');
const testMessage = require('debug')('bot:test_message');
const Discord = require('discord.js');


const client = new Discord.Client();

client.once('ready', () => {
	initialSetup('Ready!');
});

client.on('message', message => {
    testMessage(message.content);
    if (message.content.toLowerCase() === 'ping!') {
        message.channel.send('Pong.');
    }
    else if (message.content === `${prefix}server`) {
        testMessage(message.content);
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }
});

client.login(token);