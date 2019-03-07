import React from 'react';
import Helmet from 'react-helmet';
import Page from '../components/page';
import TemplateExperiments from '../components/templates/template-experiments/template-experiments';

export default class experiments extends Page {

  dataName = 'experiments';

  render() {
    const {data} = this.state;

    return (
      <React.Fragment>
        <Helmet
            title={'experiments'}
            meta={[
              { name: 'description', content: 'experiments description' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
        <TemplateExperiments data={data} />
      </React.Fragment>
    );
  }
}
