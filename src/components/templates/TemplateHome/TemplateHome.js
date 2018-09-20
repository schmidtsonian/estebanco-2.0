import React, {Component} from 'react';

import TemplateHomeHeader from './TemplateHomeHeader';
import TemplateHomeCarousel from './TemplateHomeCarousel';

class TemplateHome extends Component {

  render() {

    return (

      <section className='t-home h-abs-bg'>

        <TemplateHomeHeader
          title_line_1={this.props.data.home.title_line_1}
          title_line_2={this.props.data.home.title_line_2}
          subtitle={this.props.data.home.subtitle}
          email={this.props.data.home.email}
          carousel={this.props.data.home.carousel}
        />

        <TemplateHomeCarousel
          title_carousel_list={this.props.data.home.title_carousel_list}
          items={this.props.data.home.carousel}
        />

      </section>
    );
  }
}

export default TemplateHome;