import React, {Component} from 'react';

import TemplateHomeHeader from './TemplateHomeHeader';
import TemplateHomeCarousel from './TemplateHomeCarousel';

class TemplateHome extends Component {

  render() {
    // console.log(this.props.data)
    return (

      <section className='t-home h-abs-bg'>

        <TemplateHomeHeader
          title_line_1={this.props.data.home.title_line_1}
          title_line_2={this.props.data.home.title_line_2}
          subtitle={this.props.data.home.subtitle}
          email={this.props.data.home.email}
          carousel={this.props.data.home.carousel}
        />
        <TemplateHomeCarousel />

      </section>
    );
  }
}

export default TemplateHome;