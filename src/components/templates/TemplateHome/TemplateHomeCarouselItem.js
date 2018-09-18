import React from 'react';

const TemplateHomeCarouselItem = ({
  bgSrc='',
  classNameActive='',
  number='',
  title='',
  subtitle='',
  detail=''
}) => (

  <div className={`t-home__carousel-item h-abs-center ${classNameActive}`}>

    {/* Abstract */}
    <div className='t-home__carousel-item__abstract h-abs-full'>

      <div className='t-home__carousel-item__image h-abs-center h-abs-bg' style={{backgroundImage: `url(${bgSrc})`}}></div>
      <div className='t-home__carousel-item__image h-abs-center h-abs-bg' ></div>
      <span className='t-home__carousel-item__number'>{number}</span>
      <span className='t-home__carousel-item__line-top h-abs-center-top'></span>
      <span className='t-home__carousel-item__line-bottom h-abs-center-bottom'></span>

      <p className='t-home__carousel-item__desc-top h-abs-center-top'>{title}</p>
      <p className='t-home__carousel-item__desc-bottom h-abs-center-bottom'>{subtitle}</p>
    </div>

    {/* Detail */}
    <div className='t-home__carousel-item__detail h-abs-full s-master'>

      <span className='t-home__carousel-item__detail-close'></span>
      {detail}
    </div>

  </div>
);

export default TemplateHomeCarouselItem;