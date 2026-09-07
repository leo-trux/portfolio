/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://leotrux.fr',
    generateRobotsTxt: true,
    changefreq: 'monthly',
    priority: 0.7,
    sitemapSize: 5000,
    alternateRefs: [
        {href: 'https://leotrux.fr/fr', hreflang: 'fr'},
        {href: 'https://leotrux.fr/en', hreflang: 'en'},
    ],
};
