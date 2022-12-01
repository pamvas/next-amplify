/** @type {import('next-sitemap').IConfig} */
// Default code you can customize according to your requirements.
const config = {
    siteUrl: "www.pamvp-test.com",
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
  
      // additionalPaths: async (config) => [
      //   await config.transform(config, "/comments"),
      // ],
     
    },
  };
   
  module.exports = config;