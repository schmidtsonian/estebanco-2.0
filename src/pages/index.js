import React, {Fragment} from 'react';

import SEO from '../layouts/seo';
import Page from '../components/page';
import TemplateHome from '../components/templates/template-home/template-home';
class IndexPage extends Page {

  dataName = 'home';

  state = {
    data: {
      seo_title: '',
      seo_description: '',
      seo_keywords: '',
      seo_image: {url:''}
    }
  };

  render() {
    return (
      <Fragment>
        <SEO
          title={this.state.data.seo_title}
          description={this.state.data.seo_description}
          keywords={this.state.data.seo_keywords}
          og_image={this.state.data.seo_image.url}
        />
        <TemplateHome data={this.state.data} />
      </Fragment>
    );
  }
}



export default IndexPage;
