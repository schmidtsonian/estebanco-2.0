import React, {Fragment} from 'react';

import SEO from '../layouts/seo';
import Page from '../components/page';
import TemplateHome from '../components/templates/template-home/template-home';
class IndexPage extends Page {

  dataName = 'home';

  render() {

    const {data} = this.state;

    return (
      <Fragment>
        <SEO
          title='Estebanco + Developer'
          description='Coder + Creative Developer'
          keywords='front-end developer, web developer, creative coder, coder, experiments'
        />
        <TemplateHome data={data} />
      </Fragment>
    );
  }
}



export default IndexPage;
