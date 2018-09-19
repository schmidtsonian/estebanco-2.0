import React from 'react';

import TemplateHomeHeader from './TemplateHomeHeader';
import TemplateHomeCarousel from './TemplateHomeCarousel';

const TemplateHome = ({dataHome}) => {

  return (

    <section className='t-home h-abs-bg'>

      <TemplateHomeHeader data={dataHome[0].node.data}/>
      <TemplateHomeCarousel data={dataHome[1].node.data}/>

    </section>
  );
};

export default TemplateHome;