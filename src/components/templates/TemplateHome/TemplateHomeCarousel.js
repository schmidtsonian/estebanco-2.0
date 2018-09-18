import React, {Component} from 'react';

const TemplateHomeCarousel = () => (

  <div className='t-home__carousel'>
    <div className='t-home__carousel-content h-abs-center'>

      <div className='t-home__carousel-nav h-abs-left-top'>
        <span className='t-home__carousel-nav__bt t-home__carousel-nav__bt--arrow'>
          <span className='h-abs-center'></span>
          <span className='h-abs-center'></span>
        </span>
        <span className='t-home__carousel-nav__bt t-home__carousel-nav__bt--arrow t-home__carousel-nav__bt--arrow-next'>
          <span className='h-abs-center'></span>
          <span className='h-abs-center'></span>
        </span>
        <span className='t-home__carousel-nav__bt t-home__carousel-nav__bt--all'>
          <span className='h-abs-center'></span>
          <span className='h-abs-center'></span>
          <span className='h-abs-center'></span>
        </span>
      </div>

      <div className='t-home__carousel-items h-abs-center'></div>

      <div className='t-home__carousel-bullets h-table'>
        <ul className='h-table__cell'>
          <li></li>
        </ul>
      </div>

    </div>
  </div>
);

export default TemplateHomeCarousel;