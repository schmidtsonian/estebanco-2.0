import React, {Fragment} from 'react';
import Helmet from 'react-helmet';
import favicon from '../../static/assets/images/estebanco_256.png';


const SEO = ({

  url = 'https://www.estebanco.com',
  slug = '/',
  title = 'Estebanco',
  description = 'code + experiments',
  keywords = 'sample, something',

  twitter_card = 'summary_large_image',
  twitter_site = '@schmidtsonian',

  og_type = "website",

  // TODO: Refactor
  og_image = `https://www.estebanco.com/assets/images/estebanco.jpg`,

  color = '#5FC19A',

  msapplication_tap_highlight = 'no'

}) => (

  <Fragment>

  <Helmet
    title={title}
    meta={[
      {name: 'robots', content: 'noindex, nofollow'},

      {name: 'description', content: `${description}`},
      {name: 'keywords', content: `${keywords}`},
      {name: 'msapplication-tap-highlight', content: `${msapplication_tap_highlight}`},

      {name: 'twitter:card', content: `${twitter_card}`},
      {name: 'twitter:site', content: `${twitter_site}`},
      {name: 'twitter:title', content: `${title}`},
      {name: 'twitter:description', content: `${description}`},
      {name: 'twitter:image', content: `${og_image}`},

      {property: 'og:title', content: `${title}`},
      {property: 'og:type', content: `${og_type}`},
      {property: 'og:url', content: `${url}${slug}`},
      {property: 'og:image', content: `${og_image}`},
      {property: 'og:description', content: `${description}`},

      {name: 'application-name', content: `${title}`},
      {name: 'application-TileImage', content: `${favicon}`},
      {name: 'application-TileColor', content: `${color}`},

      {name: 'theme-color', content: `${color}`},
    ]}
    link={[
      {rel: 'shortcut icon', type: 'image/png', href: `${favicon}`}
    ]}
  >


  </Helmet>


  </Fragment>
);

export default SEO;