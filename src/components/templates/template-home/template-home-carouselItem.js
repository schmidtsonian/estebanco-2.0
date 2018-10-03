import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TemplateHomeCarouselItem extends Component {

  static propTypes = {
    classNameActive: PropTypes.string,
    bgSrc: PropTypes.string,
    number: PropTypes.string,
    action: PropTypes.string,
    title: PropTypes.string,
    detail: PropTypes.string,
  };

  static defaultProps = {
    classNameActive: '',
    bgSrc: '',
    number: '',
    action: '',
    title: '',
    detail: '',
  };

  helpers = {
    classNameActive: 'is-open'
  };

  state = {
    classNameDetailActive: ''
  };

  _closeDetail() {

    this.setState({
      classNameDetailActive: ''
    });
  }

  _openDetail() {

    const {helpers} = this;

    this.setState({
      classNameDetailActive: helpers.classNameActive
    });
  }

  render() {

    const {props, state} = this;
    console.log(props)



    return (

      <div className={`t-home__carousel-item h-abs-center ${props.classNameActive} ${state.classNameDetailActive}`}>

        {/* Abstract */}
        <div className='t-home__carousel-item__abstract h-abs-full'>

          <div className='t-home__carousel-item__image h-abs-center h-abs-bg' style={{backgroundImage: `url(${props.bgSrc})`}}></div>
          <div className='t-home__carousel-item__image h-abs-center h-abs-bg' ></div>

          <span className='t-home__carousel-item__line-top h-abs-center-top'></span>
          <span className='t-home__carousel-item__line-bottom h-abs-center-bottom'></span>

          <span className='t-home__carousel-item__number'>
            {props.number}
          </span>

          {/* Open Detail */}
          <p onClick={this._openDetail.bind(this)} className='t-home__carousel-item__desc-top h-abs-center-top'>
            {props.action}
          </p>

          {/* Title */}
          <p className='t-home__carousel-item__desc-bottom h-abs-center-bottom'>
            {props.title}
          </p>
        </div>

        {/* Detail */}
        <div className='t-home__carousel-item__detail h-abs-full s-master'>

          {/* Close Detail */}
          <span onClick={this._closeDetail.bind(this)} className='t-home__carousel-item__detail-close'></span>

          <div dangerouslySetInnerHTML={{__html: props.detail}} />
        </div>
      </div>
    );
  }
}

export default TemplateHomeCarouselItem;