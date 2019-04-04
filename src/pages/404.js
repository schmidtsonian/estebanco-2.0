import React, { Fragment } from 'react';

import Page from '../components/page';
import SEO from '../layouts/seo';
import Template404 from '../components/templates/template404/template-404';

export default class NotFoundPage extends Page {

  dataName = 'notFound';

  state = {
    data: {
      title: '0',
      description: '0',

      seo_title: '',
      seo_description: '',
      seo_keywords: '',
      seo_image: {url:''}
    }
  }

  render() {
    const {data} = this.state;

    return (
      <Fragment>
        <SEO
          title={data.seo_title}
          description={data.seo_description}
          keywords={data.seo_keywords}
          og_image={data.seo_image.url}
        />
        <Template404 data={data}/>
      </Fragment>
    );
  }
}
