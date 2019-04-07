import React, {Fragment} from 'react';
import SEO from '../layouts/seo';
import Page from '../components/page';
import TemplateExperiments from '../components/templates/template-experiments/template-experiments';

export default class experiments extends Page {

  dataName = 'experiments';

  render() {
    const {data} = this.state;

    return (
      <Fragment>
        <SEO
          title='Estebanco + Experiments'
          description='Play + Code, things I do for fun'
          keywords='experiments, web experiments, front-end experiments'
        />
        <TemplateExperiments data={data} />
      </Fragment>
    );
  }
}
