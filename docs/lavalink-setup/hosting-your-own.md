---
sidebar_position: 2
---

# Hosting your own

Hosting your own Lavalink is highly recommended as you are not reliant on third-party providers, giving you complete control over performance, customization, and uptime. It allows you to optimize audio quality, scale resources as needed, and maintain better privacy, all while ensuring a more stable and cost-effective solution.

## 1. Prerequisites

* **Java 11 or higher**: Lavalink requires Java to run, and Java 11 or higher is needed. You can download and install Java from [here](https://adoptium.net/).

## 2. Configuring application.yml
The application.yml can be located in the lavalink folder and is used to configure the lavalink application.
There has been many settings already configured which can be left alone to ensure all features are working, so we can just going to go through the recommended changes.

### Changing port number
```sh
server: # REST and WS server
  port: 5000
  address: 0.0.0.0
  ...
```
You can change the port to any value from 1024 to 65535 do not change the address unless you know what you are doing.

### Change password
```sh
lavalink:
  server:
    password: "youshallnotpass"
    ...
```
You can change the password to whatever you want to ensure the application is secure.

## 3. Running lavalink

Once Java is installed, and the Lavalink.jar and application.yml are in the same directory, you can run the Lavalink server using the following command:
```sh
java -jar Lavalink.jar
```

## 4. Configure Firewall (Optional)
If you're running Lavalink on a remote server, you may need to configure your firewall to allow incoming connections on the port specified in your application.yml (default: 5000).

:::danger WARNING!
**Warning**: Do not share your server's IP address and port with anyone you don't trust, as it can expose your server to potential security risks and unauthorized access.
:::

Linux (UFW):
```sh
sudo ufw allow 5000/tcp
```
Windows Firewall:
* Go to "Windows Defender Firewall with Advanced Security".
* Select "Inbound Rules" -> "New Rule".
* Choose "Port", enter your Lavalink port (default: 5000), and allow the connection.

## 5. Connect Your Discord Bot to Lavalink
In the node section of the config file you must now enter the IP (host), port (default 5000) and the password. 

## Additional Information
### Supported formats
The set of sources where LavaPlayer can load tracks from is easily extensible, but the ones currently included by default are:

* YouTube
* SoundCloud
* Bandcamp
* Vimeo
* Twitch streams
* Local files
* HTTP URLs

The file formats that LavaPlayer can currently handle are (relevant for file/url sources):

* MP3
* FLAC
* WAV
* Matroska/WebM (AAC, Opus or Vorbis codecs)
* MP4/M4A (AAC codec)
* OGG streams (Opus, Vorbis and FLAC codecs)
* AAC streams
* Stream playlists (M3U and PLS)

### Recommended plugins
* [Skybot plugin](https://github.com/DuncteBot/skybot-lavalink-plugin) - Add supports for the following: 
  * Reddit, Text To Speech, TikTok, PornHub and more..
* [LavaSrc](https://github.com/topi314/LavaSrc) - Add supports for the following:
  * Spotify, Apple music, Deezer, Yandex.
* [LavaSearch](https://github.com/topi314/LavaSearch) - More advanced searching on youtube request.
* [Youtube-source](https://github.com/lavalink-devs/youtube-source) - Better youtube handling. 
