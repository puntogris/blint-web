import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blint",
  description: "Android App",
  head: [
    [
      "script",
      {},
      `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`,
    ],
    ["script", { defer: "", src: "/_vercel/insights/script.js" }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Versions', link: '/versions/' },
      { text: 'Contact', link: '/contact' },
      { text: 'Help', link: '/help' }
    ],

    sidebar: [
      {
        text: 'Versions',
        items: [
          { text: "Readme", link: "/versions/" },
          { text: "1.1.4", link: "/versions/v1.1.4.md" },
          { text: "1.0.0", link: "/versions/v1.0.0.md" },
        ],
      },
      {
        text: 'More',
        items: [
          { text: 'Contact', link: '/contact' },
          { text: 'Help', link: '/help' },
          { text: 'Privacy Policy', link: '/privacy-policy' },
          { text: 'Terms & Conditions', link: '/terms-and-conditions' }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/puntogris/are-you-a-robot' }
    ],

    logo: "logo.webp",

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Made by Puntogris'
    }
  }
})
