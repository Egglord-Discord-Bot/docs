---
sidebar_position: 2
---

# Installation

## 1. Prerequisites

Node LTS, mongo setup

## 2. Config file

```js
const config = {
	ownerID: ['YourAccountID'],
	token: 'YourBotToken',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://genius.com/developers
		genius: 'genuisAPI-KEY',
		// https://api.amethyste.moe/
		amethyste: 'amethysteAPI-Key',
		// https://api.egglord.dev/settings
		masterToken: '',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'Bot\'s dashboard',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/8g6zUQu',
		// Your support's server ID
		GuildID: '750822670505082971',
		// This for using the suggestion command on your server
		ModRole: '751857618720522341',
		// What channel to post the suggestions
		SuggestionChannel: '761619652009787392',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '761619652009787392',
		// Where rate limits will be sent to, for investigation
		rateLimitChannelID: '761612724370931722',
	},
	API: {
		port: 3000,
		secure: true,
		token: '123456789',
	},
	Staff: {
		ContributorRole: "814645275544387705",
		SupportRole: "740674583023321200",
		DeveloperRole: "740682780467396705",
	},
	LavalinkNodes: [
		{ host: 'localhost', port: 5000, password: 'youshallnotpass' },
	],
	// URL to mongodb
	MongoDBURl: 'mongodb://link',
	// embed colour
	embedColor: Colors.Default,
	// This will spam your console if you enable this but will help with bug fixing
	debug: false,
};
```
### 2.1 Owner ID & Token

The Owner ID is an [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of all the discord user IDs you want to have access to the Host commands.

The token is the discord token found in the discord developer [page](https://discord.com/developers/applications). 

:::warning WARNING!
Only add people you trust as they could get access to the entire machine that runs the bot application via the eval command. 
:::

### 2.2 API Keys
The API keys are what allows the bot to make third party requests like image manipulation or fetching data about a certain social media account. If you don't want to use them that's fine the command just won't work without crashing the entire bot.

The master token handles nearly all API request and is powered by another project I created called the [Egglord API server](https://api.egglord.dev/), you can host your own version of the API by looking at the docs [here](/docs/category/api-server-setup).

### 2.3 Disabled Commands & plugins

This allows you to disable commands or plugins (command categories) without completing that file allowing you quickly fix if something goes wrong.

### 2.4 Website URL & Support Server

If your Discord bot has a web dashboard you can insert the URL here allowing people to access it easier. 

The support server is also a useful section as it allows your users to get easy access to your community etc. 

:::warning Warning!
You must atleast add your guildID in the support server section or you won't be able to activate the slash commands and interactions.
:::

### 2.5 API

The inbuilt API is for accessing information about the bot allowing you to build web dashboards with that data or adding new features like a website for controling the music player for a guild.

### 2.6 Staff

The staff section is a set of role IDs used to distinguish users and staff. This data also populates more fields on the user-info command. 

### 2.7 Lavalink

Lavalink is what allows the bot to play audio from nearly any source, the docs on setting up a lavalink server can be found [here](/docs/category/lavalink-setup).

### 2.8 Database, Embed colour and debugging

As the bot has many features a database is required to store all the data and keep persistent in case the bot goes down, you can find a guide on setting this up [here](/docs/bot-setup/setting-up-the-database).

Embed colour is set to globally set a theme to your bot allowing all embeds to look the same (This excludes the error and success embed).

Debugging should be set to false unless you are getting errors as it can get quite spammy on the loggign system (console and file system).

## 3. Emoji Discord Server (Optional)

Once the config has been edited to your liking, you can join the [emoji server](https://discord.gg/juFcfkVDGx) and a staff member will add your bot allowing the bot to have access to the custom emojis.
