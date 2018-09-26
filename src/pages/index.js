import React from 'react';
import {MainContext} from '../contexts/main-context';
import Page from '../components/page';
import TemplateHome from '../components/templates/template-home/template-home';


class IndexPage extends Page {

  dataName = 'home';

  render() {
    return (
      <MainContext.Consumer>
        {({onMountPage, onUnmountPage}) => (
          <TemplateHome
            data={this.state.data}
            onMountPage={onMountPage}
            onUnmountPage={onUnmountPage}
          >
          </TemplateHome>
        )}
      </MainContext.Consumer>
    );
  }
}



export default IndexPage;
