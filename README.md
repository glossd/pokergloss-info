# PokerGloss Info
Informational pages for [PokerGloss.com](https://PokerGloss.com)    
[Front-end](https://github.com/glossd/pokergloss-ui)

### Acknowledgment
I want to thank two people who managed this for me: [Kirill Vasilev](https://github.com/Kir10) and Artem Kopylov.

### Regrets
I really should have used plain html and css for this instead of a JS framework. I spent too much time trying to run this three years old project.

### Installing
If you have this [error](https://stackoverflow.com/questions/58919394/gatsby-new-fails-to-install-the-sharp-package-and-breaks).
So your OS needs to have `vips`.
Also run this `npm i -g node-gyp@latest && npm config set node_gyp "/usr/local/lib/node_modules/node-gyp/bin/node-gyp.js"`
And this `yarn global add gatsby-cli`
Then run `yarn install`
And finally `yarn build`


### How it works
We used the default Gatsby starter `gatsby-plugin-intl` for i18n.

- Turn your gatsby site into an internationalization-framework out of the box powered by [react-intl](https://github.com/yahoo/react-intl). 

- Support automatic redirection based on the user's preferred language in browser provided by [browser-lang](https://github.com/wiziple/browser-lang).

- Support multi-language url routes in a single page component. This means you don't have to create separate pages such as `pages/en/index.js` or `pages/ko/index.js`.

- Based on [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) with least modification.

Please visit [https://github.com/wiziple/gatsby-plugin-intl](https://github.com/wiziple/gatsby-plugin-intl) for more details.