---
sidebar_position: 2
---

# Editing the config file!

Find the file `src/config.example.js`, this is where all your information will go. The links to each API is above each line, commented out.
* The API's are **highly recommended** to fill in but are optionally (If you have a missing API, the command it  to will not work.)
* `disabledCommands` & `disabledPlugins` An array of commands or categories you don't want loaded on the bot.
* `SupportServer` will match the support server for your bot.
* `websiteURL` will match your bot's dashboard, If you don't have one use `https://localhost`.
* `defaultSettings` are the settings the bot will use when in **DM's**.
* `MongoDBURl` where your MongoDB URL will go. (This is VITAL, you need it for the bot to work)
* Make sure to add your bot to **the emoji [server](https://discord.gg/juFcfkVDGx)** to get access to the custom emoijis.
> Once the config is filled out rename **config.example.js** to **config.js**

## What's next?

- Read the [official documentation](https://docusaurus.io/)
- Modify your site configuration with [`docusaurus.config.js`](https://docusaurus.io/docs/api/docusaurus-config)
- Add navbar and footer items with [`themeConfig`](https://docusaurus.io/docs/api/themes/configuration)
- Add a custom [Design and Layout](https://docusaurus.io/docs/styling-layout)
- Add a [search bar](https://docusaurus.io/docs/search)
- Find inspirations in the [Docusaurus showcase](https://docusaurus.io/showcase)
- Get involved in the [Docusaurus Community](https://docusaurus.io/community/support)
