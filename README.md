# 🏮 Integrator


🎇 _Based on AstroWind KitStarter, it achieved 100% in lighthouse with 5 categories_. 🎇

**Integrator** is a free, open-source, easy-to-use, and high-performance software that helps you to integrate your favorite technology into your project in an easy and smooth way, also anyone can contribute to Integrator
and make the web a better place


## Features

- 🎯 **_Open Source_** software anyone can contribute
- 🎯 **_No Fees_** required to integrate your favorite technology into your project.
- 🎯 **_Support 11+ Frameworks_** delivering Javascript Frameworks integration to the software at the first
- 🎯 **_Integrate 44+ Technology_** We will add the most used technologies and softwares The next step will update based on the developers needs
- 🎯 **_Well Documented_** software, have so many tutorials, also you can integrate with any library or software in an easy way, and explanations are included.
- 🎯 **_Open API_** so other developers can talk with our back-end side 
- 🎯 **_KitStarter_** You can use this repository as a base for your project.

<br>
<br>

<img src="https://github.com/mohammmedsinan/Integrator/blob/master/src/assets/visuals/readme.jpeg" alt="AstroWind Theme Screenshot">

<br>
<br>

[![Mohammed Sinan](https://custom-icon-badges.demolab.com/badge/made%20by%20-onWidget-556bf2?style=flat-square&logo=onwidget&logoColor=white&labelColor=101827)](https://onwidget.com)
[![License](https://img.shields.io/github/license/onwidget/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/astrowind/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/onwidget)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/onwidget/astrowind#contributing)

<br>

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Commands](#commands)
- [Configuration](#configuration)
- [Deploy](#deploy)
- [Contributing](#contributing)
- [License](#license)

</details>


## Demo

📌 [https://integrat0r.netlify.app/](https://integrat0r.netlify.app/)


### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm install`         | Installs dependencies                              |
| `npm run dev`         | Starts local dev server at `localhost:3000`        |
| `npm run build`       | Build your production site to `./dist/`            |
| `npm run preview`     | Preview your build locally, before deploying       |
| `npm run format`      | Format codes with Prettier                         |
| `npm run lint:eslint` | Run Eslint                                         |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.mjs`

```javascript
const CONFIG = {
  name: 'Example',

  origin: 'https://example.com',
  basePathname: '/', // Change this if you need to deploy to Github Pages, for example
  trailingSlash: false, // Generate permalinks with or without "/" at the end

  title: 'Example - This is the homepage title of Example', // Default seo title
  description: 'This is the homepage description of Example', // Default seo description
  defaultImage: 'image.jpg', // Default seo image

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en', // Default language
  textDirection: 'ltr', // Default html text direction

  dateFormatter: new Intl.DateTimeFormat('en', {
    // Date format
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // Or "G-XXXXXXXXXX",
  googleSiteVerificationId: false, // Or some value,

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};
```

<br>

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

## Contributing

If you have any idea, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.


## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
