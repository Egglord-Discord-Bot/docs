---
sidebar_position: 2
---

# Installation

## 1. Prerequisites

Before starting we need to ensure a couple things are completed before carrying on with the installation guide. 

### 1.1 Node.js
First ensure Node.js LTS has been installed, this can be checked by running the command: `node -v`. If an error is displayed or it does not match the LTS on the node website it can be installed using the link below:
* Node LTS - You can download [here](https://nodejs.org/en).

### 1.2 MySQL
Next MySQL needs to be installed (This guide will not cover if installed on another machine as that only changes the connection string), this can be checked by running the command: `mysql`. If an error is displayed, it can be installed from the link below:
* MySQL Server - You can download [here](https://dev.mysql.com/downloads/mysql/).

## 2. Backend 

The backend folder is where the actual requests are handled for the API.
The config file is located as the .env.example file and will contain the following:
```sh
DATABASE_URL=""
port=4500     # Any number from 1024 to 65565
sessionSecret=""  #cmd: openssl rand -base64 128
fortniteAPI=""
R6Email=""      #https://www.ubisoft.com/en-gb/
R6Password=""     #https://www.ubisoft.com/en-gb/
steam=""      #https://steamcommunity.com/dev/apikey
twitchId=""   #https://dev.twitch.tv/console
twitchSecret=""   #https://dev.twitch.tv/console
twitterBearerToken=""
discordToken=""   #https://discord.com/developers/applications
riotToken=""      #https://developer.riotgames.com/
weatherAPI=""     #https://www.weatherapi.com/my/
debug=false
```
:::warning
Please remember to change the file to `.env` once finished to ensure the projects can correctly import these values.
:::

### 2.1 Database URL
If unsure about the MySQL database URL, it will use the following structure:
```sh
mysql://<username>:<password>@<ip>:3306/<database>
```
:::warning
Remember to remove the \<\> when typing in your credentials as you won't be able to connect if you do.
:::


### 2.2 Session Secret
Generating a session secret is a quite easy task to ensure the user's sessions are secure this can range from spamming your keyboard for a random alphanumerical string or you can use a CLI like OpenSSL to create a strong secret ensuring maximum security. Which this little guide will help go through.

Install OpenSSL

Run the command: 
```sh
openssl rand -base64 128
```

### 2.3 Rainbow 6 Siege (R6) options

The email and password you would enter is your ubisoft login email and password.

### 2.4 Steam 

Steam API can only be used if the account has spent atleast 5 GBP (or equivelant) this ensures bots are not maliciosuly using the API.

## 3. Frontend

The config file is located as the .env.example file and will contain the following:
```sh
NEXTAUTH_URL=""
NEXTAUTH_SECRET=""
BACKEND_URL=""
discordId=""      #https://discord.com/developers/applications
discordSecret=""      #https://discord.com/developers/applications
```
:::warning
Please remember to change the file to `.env` once finished to ensure the projects can correct import these values.
:::

### 3.1 Nextauth URL
This will be the URL, people will connecting to access the website e.g https://api.egglord.dev

### 3.2 Nextauth Secret
This will be the same as the session secret you created in the backend folder.

### 3.3 Backend URL
This will be the URL of the backend web server. This address should not be exposed to the public so a local IP is best as the frontend websites will proxy the requests across itself.

### 3.4 Discord Id & Secret

This will allow users to log into the web application using their discord account.