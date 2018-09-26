import React from 'react';
import Template from '../template';
import TemplateHomeHeader from './template-home-header';
import TemplateHomeCarousel from './template-home-carousel';


export default class TemplateHome extends Template {

  render() {

    const {data} = this.props;

    return (

      <section className='t-home h-abs-bg'>

        <TemplateHomeHeader
          title_line_1={data.title_line_1}
          title_line_2={data.title_line_2}
          subtitle={data.subtitle}
          email={data.email}
          carousel={data.carousel}
        />

        <TemplateHomeCarousel
          title_carousel_list={data.title_carousel_list}
          items={data.carousel}
        />

      </section>
    );
  }
}
