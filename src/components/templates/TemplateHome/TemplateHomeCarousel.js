import React, {Component} from 'react';
import TemplateHomeCarouselItem from './TemplateHomeCarouselItem';

class TemplateHomeCarousel extends Component {

  constructor(props) {
    super(props);

    this.helper = {
      classActiveBullets: 'is-bullets',
    };

    this.isActiveBullets = false;

    this.state = {
      currentItemIndex: 0,
      classActiveBullets: '',
      items: []
    };
  }

  _tweenSlide(direction = 1) {

    let index = this.state.currentItemIndex + direction;
    index = index < 0 ? this.props.items.length - 1 : index;
    index = index >= this.state.items.length ? 0 : index;
    this.setState({currentItemIndex: index});
  }

  _toggleNav() {

    const {helper} = this;

    this.isActiveBullets = !this.isActiveBullets;
    const classActiveBullets = this.isActiveBullets ? helper.classActiveBullets : '';
    this.setState({
      classActiveBullets: classActiveBullets
    });
  }

  componentDidUpdate(prevProps) {

    if (this.props.items !== prevProps.items) {

      this.setState({items:this.props.items});
    }
  }

  render() {
    const {title_carousel_list} = this.props;
    const {items} = this.state;

    return (

      <div className={`t-home__carousel ${this.state.classActiveBullets}`}>

        <div className='t-home__carousel-content h-abs-center'>

          {/* Navigation */}
          <div className='t-home__carousel-nav h-abs-left-top'>

            <span onClick={this._tweenSlide.bind(this, -1)} className='t-home__carousel-nav__bt t-home__carousel-nav__bt--arrow'>
              <span className='h-abs-center'></span>
              <span className='h-abs-center'></span>
            </span>
            <span onClick={this._tweenSlide.bind(this, 1)} className='t-home__carousel-nav__bt t-home__carousel-nav__bt--arrow t-home__carousel-nav__bt--arrow-next'>
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

              const classNameActive = index === this.state.currentItemIndex ? 'is-active' : '';
              return <TemplateHomeCarouselItem key={index} classNameActive={classNameActive} bgSrc={item.image.url} number={item.number} action={item.action} title={item.title} detail={item.detail}/>
            }
            )}
          </div>

          {/* List (bullets) */}
          <div className='t-home__carousel-bullets h-table'>
            <ul className='h-table__cell'>

              {/* state: is-active */}
              {/* WIP */}
              {items.map((item, index) =>
                <li key={index} className={`t-home__carousel-bullets__item ${index === this.state.currentItemIndex ? 'is-active' : ''}`}>
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

}

export default TemplateHomeCarousel;