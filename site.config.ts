import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: process.env.NEXT_PUBLIC_NOTION_ROOT_ID,

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,
  isSearchEnabled: false,

  // basic site info (required)
  name: process.env.NEXT_PUBLIC_TITLE,
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  author: process.env.NEXT_PUBLIC_AUTHOR,

  // open graph metadata (optional)
  description: process.env.NEXT_PUBLIC_DESCRIPTION,

  // social usernames (optional)
  twitter: process.env.NEXT_PUBLIC_TWITTER
    ? process.env.NEXT_PUBLIC_TWITTER
    : null,
  github: process.env.NEXT_PUBLIC_GITHUB
    ? process.env.NEXT_PUBLIC_GITHUB
    : null,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN
    ? process.env.NEXT_PUBLIC_LINKEDIN
    : null,
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  newsletter: process.env.NEXT_PUBLIC_NEWSLETTER
    ? process.env.NEXT_PUBLIC_NEWSLETTER
    : null,
  youtube: process.env.NEXT_PUBLIC_YOUTUBE
    ? process.env.NEXT_PUBLIC_YOUTUBE
    : null,
  // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Alexander',
      pageId: 'dcb2fd1014934b78944575c30ee72dcc'
    },
    {
      title: 'Kintania',
      pageId: '5bc61e65bfe04327a789d1706be139b4'
    },
    {
      title: 'About Us',
      pageId: 'd3d49c934f234a798a8d1edfea174dcf'
    }
  ]
})
