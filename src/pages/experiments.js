import React from 'react';
import Page from '../components/page';
import TemplateExperiments from '../components/templates/template-experiments/template-experiments';

export default class experiments extends Page {

  dataName = 'experiments';

  render() {
    const {data} = this.state;

    return (
      <TemplateExperiments data={data} ></TemplateExperiments>
    );
  }
}
