import React from 'react';
import PropTypes from 'prop-types';

import Template from '../template';
import TemplateExperimentsHeader from './template-experiments-header';
import TemplateExperimentsGrid from './template-experiments-grid';

class TemplateExperiments extends Template {

  static propTypes = {
    // eslint-disable-next-line
    ...TemplateExperiments.propTypes,
    data: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      items: PropTypes.array
    })
  };

  static defaultProps = {
    ...TemplateExperiments.defaultProps,

    // Model definition
    data: {
      title: '0',
      description: '0',
      items: []
    }
  };

  render() {

    const {data} = this.props;

    return(
      <section className='t-experiments'>

        <TemplateExperimentsHeader
          title={data.title}
          description={data.description}>
        </TemplateExperimentsHeader>

        <TemplateExperimentsGrid
          items={data.items}>
        </TemplateExperimentsGrid>
      </section>
    )
  }
}

export default TemplateExperiments;
