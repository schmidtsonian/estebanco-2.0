import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PrismicDOM from 'prismic-dom';

import TemplateHomeCarouselItem from './template-home-carouselItem';
class TemplateHomeCarousel extends Component {

  static propTypes = {
    title_carousel_list: PropTypes.string,
    items: PropTypes.array
  };

  static defaultProps = {
    title_carousel_list: '',
    items: []
  };

  isActiveBullets = false;

  helper = {
    classActiveBullets: 'is-bullets',
  };

  state = {
    currentItemIndex: 0,
    classActiveBullets: '',
  };

  _nextSlide() {

    const {currentItemIndex} = this.state;
    this._goToSlide(currentItemIndex + 1);
  }

  _prevSlide() {

    const {currentItemIndex} = this.state;
    this._goToSlide(currentItemIndex - 1);
  }

  _goToSlide(index) {

    const {items} = this.props;

    let i = index;
    i = i < 0 ? items.length - 1 : i;
    i = i >= items.length ? 0 : i;
    this._tweenSlide(i);
  }

  _toggleNav() {

    const {helper} = this;

    this.isActiveBullets = !this.isActiveBullets;
    const classActiveBullets = this.isActiveBullets ? helper.classActiveBullets : '';
    this.setState({
      classActiveBullets: classActiveBullets
    });
  }

  _toggleNavAndGoToSlide(index) {

    this._toggleNav();
    this._goToSlide(index);
  }

  _tweenSlide(index) {

    this.setState({currentItemIndex: index});
  }

  render() {

    const {state} = this;
    const {title_carousel_list, items} = this.props;

    return (

      <div className={`t-home__carousel ${state.classActiveBullets}`}>

        <div className='t-home__carousel-content h-abs-center'>

          {/* Navigation */}
          <div className='t-home__carousel-nav h-abs-left-top'>

            <span onClick={this._prevSlide.bind(this)} className='t-home__carousel-nav__bt t-home__carousel-nav__bt--arrow'>
              <span className='h-abs-center'></span>
              <span className='h-abs-center'></span>
            </span>
            <span onClick={this._nextSlide.bind(this)} className='t-home__carousel-nav__bt t-home__carousel-nav__bt--arrow t-home__carousel-nav__bt--arrow-next'>
              <span className='h-abs-center'></span>
              <span className='h-abs-center'></span>
            </span>

            <span onClick={this._toggleNav.bind(this)} className='t-home__carousel-nav__bt t-home__carousel-nav__bt--all'>
              <span className='h-abs-center'></span>
              <span className='h-abs-center'></span>
              <span className='h-abs-center'></span>
            </span>
          </div>

          {/* Items */}
          {/* WIP */}
          <div className='t-home__carousel-items h-abs-center'>

            {items.map((item, index) => {

              const classNameActive = index === state.currentItemIndex ? 'is-active' : '';
              const html = PrismicDOM.RichText.asHtml(item.detail);
              return <TemplateHomeCarouselItem
                key={index}
                classNameActive={classNameActive}
                bgSrc={item.image.url}
                number={item.number}
                action={item.action}
                title={item.title}
                detail={html}/>
            }
            )}
          </div>

          {/* List (bullets) */}
          <div className='t-home__carousel-bullets h-table'>
            <ul className='h-table__cell'>

              {/* state: is-active */}
              {/* WIP */}
              {items.map((item, index) =>
                <li onClick={this._toggleNavAndGoToSlide.bind(this, index)} key={index} className={`t-home__carousel-bullets__item ${index === this.state.currentItemIndex ? 'is-active' : ''}`}>
                  <span>{item.number}</span>
                  <span>{item.title}</span>
                </li>
              )}
            </ul>
            <span className='t-home__carousel-item__line-top h-abs-center-top'></span>
            <span className='t-home__carousel-item__line-bottom h-abs-center-bottom'></span>
            <p className='t-home__carousel-item__desc-bottom t-home__carousel-item__desc-bottom--bullets h-abs-center-bottom'>
              {title_carousel_list}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // componentDidUpdate(prevProps) {

  //   if (this.props.items !== prevProps.items) {

  //     this.setState({items:this.props.items});
  //   }
  // }
}

export default TemplateHomeCarousel;