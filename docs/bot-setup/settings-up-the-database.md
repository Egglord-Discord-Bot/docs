---
sidebar_position: 3
---

# Setting up the Database!

The database natively used is [MongoDB](https://www.mongodb.com/). So you will need to [create an account](https://www.mongodb.com/try) for this step.

* Once you have created an account navigate to the cluster page and create a free cluster.
* Next wait for the changes to be deployed (this could take upto 5 minutes) and click the `connect` button.
* Select the `Allow Access from Anywhere` button and then `Add Ip Address`.
* Create a `dbUser` and `dbUserPassword` and hold onto this for later.
* Navigate to `Choose a connection method` click `Connect your application` and copy the provided link.
* Navigate to `src/config.js` in your bot and replace the `mongodb://link`at the bottom with the link you have copied. **Make sure to replace `<password>` with the password you created** .

## What's next?

- Read the [official documentation](https://docusaurus.io/)
- Modify your site configuration with [`docusaurus.config.js`](https://docusaurus.io/docs/api/docusaurus-config)
- Add navbar and footer items with [`themeConfig`](https://docusaurus.io/docs/api/themes/configuration)
- Add a custom [Design and Layout](https://docusaurus.io/docs/styling-layout)
- Add a [search bar](https://docusaurus.io/docs/search)
- Find inspirations in the [Docusaurus showcase](https://docusaurus.io/showcase)
- Get involved in the [Docusaurus Community](https://docusaurus.io/community/support)
