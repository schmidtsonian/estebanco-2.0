import React from 'react';
import Helmet from 'react-helmet';

import Page from '../components/page';
import TemplateHome from '../components/templates/template-home/template-home';
class IndexPage extends Page {

  dataName = 'home';

  render() {
    return (
      <React.Fragment>
      <Helmet
        title={'home'}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
        <TemplateHome data={this.state.data} />
      </React.Fragment>
    );
  }
}



export default IndexPage;
