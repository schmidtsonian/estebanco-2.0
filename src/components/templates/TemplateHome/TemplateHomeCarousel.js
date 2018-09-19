import React, {Component} from 'react';
import TemplateHomeCarouselItem from './TemplateHomeCarouselItem';

class TemplateHomeCarousel extends Component {

  constructor(props) {
    super(props);

    console.log(this.props.data);

    this.helper = {
      classActiveBullets: 'is-bullets',
    };

    this.state = {
      currentItemIndex: 1,
      isActiveBullets: false,
      classActiveBullets: '',
      items: [
        {
          id: 1,
          bgSrc: '/assets/images/temp.jpg',
          classNameActive: 'is-active',
          number: '01',
          action: 'read more',
          title: 'the title',
          detail: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul> <pre><code> #header h1 a { display: block; } </code></pre>',
        },
        {
          id: 2,
          bgSrc: '/assets/images/temp.jpg',
          classNameActive: '',
          number: '01',
          action: 'read more',
          title: 'the title 2',
          detail: '<p>the detail</p>',
        }
      ]
    };
  }

  _updateCurrentItem(index = 1) {

  }

  _tweenSlide(direction = 1) {

  }

  _toggleNav() {

    const {helper} = this;

    const isActiveBullets = !this.state.isActiveBullets;
    const classActiveBullets = this.state.isActiveBullets ? '' : helper.classActiveBullets;
    this.setState({
      isActiveBullets: isActiveBullets,
      classActiveBullets: classActiveBullets
    });
  }

  render() {

    return (

      <div className={`t-home__carousel ${this.state.classActiveBullets}`}>

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

            <span onClick={this._toggleNav.bind(this)} className='t-home__carousel-nav__bt t-home__carousel-nav__bt--all'>
              <span className='h-abs-center'></span>
              <span className='h-abs-center'></span>
              <span className='h-abs-center'></span>
            </span>
          </div>

          {/* Items */}
          <div className='t-home__carousel-items h-abs-center'>

            {this.state.items.map((item) =>
              <TemplateHomeCarouselItem key={item.id} classNameActive={item.classNameActive} bgSrc={item.bgSrc} number={item.number} action={item.action} title={item.title} detail={item.detail}/>
            )}
          </div>

          {/* List (bullets) */}
          <div className='t-home__carousel-bullets h-table'>
            <ul className='h-table__cell'>

              {/* state: is-active */}

              {this.state.items.map((item) =>
                <li key={item.id} className={`t-home__carousel-bullets__item ${item.classNameActive}`}>
                  <span>{item.number}</span>
                  <span>{item.title}</span>
                </li>
              )}
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