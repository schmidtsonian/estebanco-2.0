import React, {Component} from 'react';
import TemplateHomeCarouselItem from './TemplateHomeCarouselItem';

class TemplateHomeCarousel extends Component {

  render() {

    return (

      <div className='t-home__carousel'> {/* state: is-bullets */}

        <div className='t-home__carousel-content h-abs-center'>

          {/* Navigation */}
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

          {/* Items */}
          <div className='t-home__carousel-items h-abs-center'>
            <TemplateHomeCarouselItem bgSrc='/assets/images/temp.jpg' classNameActive='is-active' number='01' title='the title' subtitle='the subtitle' detail='<p>the detail</p>'/>
            <TemplateHomeCarouselItem bgSrc='/assets/images/temp.jpg' number='01' title='the title' subtitle='the subtitle' detail='<p>the detail</p>'/>
          </div>


          {/* List (bullets) */}
          <div className='t-home__carousel-bullets h-table'>
            <ul className='h-table__cell'>

              {/* state: is-active */}
              <li className='t-home__carousel-bullets__item'>
                <span>01</span>
                <span>the title</span>
              </li>
            </ul>
            <span className='t-home__carousel-item__line-top h-abs-center-top'></span>
            <span className='t-home__carousel-item__line-bottom h-abs-center-bottom'></span>
            <p className='t-home__carousel-item__desc-bottom t-home__carousel-item__desc-bottom--bullets h-abs-center-bottom'>sas</p>
          </div>

        </div>
      </div>
    );
  }

}

export default TemplateHomeCarousel;