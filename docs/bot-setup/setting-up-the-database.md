---
sidebar_position: 3
---

# Setting up the Database!

The database natively used is [MongoDB](https://www.mongodb.com/). So you will need to [create an account](https://www.mongodb.com/try) for this step.

* Once you have created an account navigate to the cluster page and create a free cluster.
![gif](/img/creating-mongo-database.webp)
* Next wait for the changes to be deployed (this could take upto 5 minutes) and click the `connect` button.
* Select the `Allow Access from Anywhere` button and then `Add Ip Address`.
![gif](/img/allowing-access-to-database.webp)

* Create a `dbUser` and `dbUserPassword` and hold onto this for later.
![gif](/img/creating-user-for-database.webp)
* Navigate to `Choose a connection method` click `Connect your application` and copy the provided link.
![gif](/img/getting-connection-string.webp)
* Navigate to `src/config.js` in your bot and replace the `mongodb://link`at the bottom with the link you have copied. **Make sure to replace `<password>` with the password you created** .

:::danger WARNING!
Do not share your username and password with anyone.
:::
