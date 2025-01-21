export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/event/'],
        },
        sitemap: 'https://www.asiuk.org/sitemap.xml',
    }
}