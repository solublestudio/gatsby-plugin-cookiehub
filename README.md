# Gatsby Plugin Cookiehub

Add scripts of [Cookiehub](https://www.cookiehub.com/) in your project with support development evironment

## Install

`yarn add @solublestudio/gatsby-plugin-cookiehub` / `npm install @solublestudio/gatsby-plugin-cookiehub`

## How to use

Add plugin to `gatsby-config.js`

```javascript
plugins: [
    ...otherPlugins
  {
    resolve: "@solublestudio/gatsby-plugin-cookiehub",
    options: {
      cookiehubID: "YOUR_COOKIEHUB_ID",
      // It is default to true only in development environment
      isDev: false,
      // Defaults to false, it is specify cookiehub script it will added in <head>
      head: false,
    },
  },
]
```
