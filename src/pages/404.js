import React, { Fragment } from 'react';

import Page from '../components/page';
import SEO from '../layouts/seo';
import Template404 from '../components/templates/template404/template-404';

export default class NotFoundPage extends Page {

  dataName = 'notFound';

  state = {
    data: {
      title: '0',
      description: '0'
    }
  }

  render() {
    const {data} = this.state;

    return (
      <Fragment>
        <SEO
          title='Not Found'
          description="You just hit a route that doesn't exist... the sadness."
          keywords='bad code, bad route'
        />
        <Template404 data={data}/>
      </Fragment>
    );
  }
}
