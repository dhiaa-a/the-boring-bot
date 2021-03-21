/**
 * Commands handler
 * @author dhiaajhamed
 * 
 */

// dependencies
const { prefix } = require('./config');

module.exports = (client, aliases, callback) => {
    // this function loops through an array so turn string to array if passed
    // ['ping', 'test'] -> ['ping', 'test']
    // 'ping' -> ['ping']
    aliases = typeof (aliases) === 'string' ? [aliases] : aliases;

    client.on('message', message => {
        const { content } = message;

        aliases.forEach(alias => {
            // build the command with the prefix
            const command = `${prefix}${alias}`;

            if (content.startsWith(`${command} `) || content === command) {
                console.log(`Running the command: ${command}`);
                callback(message);
            }
        });
    });
};