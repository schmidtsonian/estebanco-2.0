import React, {Fragment} from 'react';
import Helmet from 'react-helmet';

const SEO = ({title, description}) => (

  <Fragment>

  <Helmet
    title={title}
    meta={[
      { name: 'description', content: `${description}` },
    ]}
  />
  </Fragment>
);

export default SEO;