import React from 'react';
import Template from '../template';
import TemplateExperimentsHeader from './template-experiments-header';

class TemplateExperiments extends Template {

  render() {

    const {data} = this.props;
    return(
      <TemplateExperimentsHeader title={data.title || ''}></TemplateExperimentsHeader>
    )
  }
}

export default TemplateExperiments;
