import React from 'react';
import Page from '../components/page';
import TemplateHome from '../components/templates/template-home/template-home';
class IndexPage extends Page {

  dataName = 'home';

  render() {
    return (
      <TemplateHome data={this.state.data} ></TemplateHome>
    );
  }
}



export default IndexPage;
