import React, {Fragment} from 'react';

import Page from '../components/page';
import TemplateHome from '../components/templates/template-home/template-home';
import SEO from '../layouts/seo';
class IndexPage extends Page {

  dataName = 'home';

  render() {
    return (
      <Fragment>
        <SEO
          title={this.state.data.seo_title}
          description={this.state.data.seo_description}
        />
        <TemplateHome data={this.state.data} />
      </Fragment>
    );
  }
}



export default IndexPage;
