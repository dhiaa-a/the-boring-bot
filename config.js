/**
 * Home file for configuration options
 * @author dhiaajhamed
 */

// dependencies

// container
var config = {};

// bot token for logging in to discord
config.token = process.env.TOKEN || require('./env.json').token;

// bot prefix
/**@todo make sure the bot doesn't interfere with other bots' prefixes */
config.prefix = "b.";


module.exports = config;