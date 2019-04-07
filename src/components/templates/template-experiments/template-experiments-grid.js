import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PrismicDOM from 'prismic-dom';

import TemplateExperimentsGridCard from './template-experiments-grid-card';

class TemplateExperimentsGrid extends Component {

  static propTypes = {
    items: PropTypes.array
  };

  static defaultProps = {
    items: []
  };

  render() {

    const {items} = this.props;

    return (
      <div className='t-experiments__grid'>
        <div className='t-experiments__grid-row row'>

          {items.map((item, index) => {
            const html = PrismicDOM.RichText.asHtml(item.content);
            return <TemplateExperimentsGridCard
              key={index}
              index={('0' + (index + 1)).slice(-2)}
              title={item.title}
              content={html}
              />
            }
          )}

          <span className='t-experiments__border-bottom'></span>
          <span className='t-experiments__border-right'></span>
        </div>
      </div>
    );
  }
}

export default TemplateExperimentsGrid;
