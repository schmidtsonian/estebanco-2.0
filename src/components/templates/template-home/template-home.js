import React from 'react';
import PropTypes from 'prop-types';

import Template from '../template';
import TemplateHomeHeader from './template-home-header';
import TemplateHomeCarousel from './template-home-carousel';


export default class TemplateHome extends Template {

  static propTypes = {
    // eslint-disable-next-line
    ...TemplateHome.propTypes,
    data: PropTypes.shape({
      title_line_1: PropTypes.string,
      title_line_2: PropTypes.string,
      subtitle: PropTypes.string,
      title_carousel_list: PropTypes.string,
      carousel: PropTypes.array,
    })
  };

  static defaultProps = {
    ...TemplateHome.defaultProps,

    // Model definition
    // TODO: create model definition
    data: {
      title_line_1: '',
      title_line_2: '',
      subtitle: '',
      title_carousel_list: '',
      carousel: [],
    }
  };

  render() {

    const {data} = this.props;
    return (

      <section className='t-home'>

        <TemplateHomeHeader
          title_line_1={data.title_line_1}
          title_line_2={data.title_line_2}
          subtitle={data.subtitle}
          email={data.email}
        />

        <TemplateHomeCarousel
          title_carousel_list={data.title_carousel_list}
          items={data.carousel}
        />

      </section>
    );
  }
}
