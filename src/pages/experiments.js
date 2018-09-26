import React from 'react';
import {MainContext} from '../contexts/main-context';
import Page from '../components/page';
import TemplateExperiments from '../components/templates/template-experiments/template-experiments';

export default class experiments extends Page {

  dataName = 'experiments';

  render() {
    return (
      <MainContext.Consumer>
        {({onMountPage, onUnmountPage}) => (
          <TemplateExperiments
            data={this.state.data}
            onMountPage={onMountPage}
            onUnmountPage={onUnmountPage}
          >
          </TemplateExperiments>
        )}
      </MainContext.Consumer>
    );
  }
}
