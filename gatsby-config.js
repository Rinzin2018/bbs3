require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
  ],
  siteMetadata: {
    title: 'Dragon Coders',
    siteUrl: `https://dcpl.bt`,
    copyright: 'This website is copyright 2021 Dragon Coders Pvt. Ltd.',
    contact: 'info@dcpl.bt',
  }
};
