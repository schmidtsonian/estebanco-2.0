import React, {Fragment} from 'react';
import SEO from '../layouts/seo';
import Page from '../components/page';
import TemplateExperiments from '../components/templates/template-experiments/template-experiments';

export default class experiments extends Page {

  dataName = 'experiments';

  state = {
    data: {
      title: '',
      description: '',
      items: [],

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
          title={this.state.data.seo_title}
          description={this.state.data.seo_description}
          keywords={this.state.data.seo_keywords}
          og_image={this.state.data.seo_image.url}
        />
        <TemplateExperiments data={data} />
      </Fragment>
    );
  }
}
