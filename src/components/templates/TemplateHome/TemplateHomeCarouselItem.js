import React, {Component} from 'react';

class TemplateHomeCarouselItem extends Component {

  constructor(props) {
    super(props);

    this.helpers = {
      classNameActive: 'is-open'
    };

    this.state = {
      classNameDetailActive: ''
    };
  }

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

    return (

      <div className={`t-home__carousel-item h-abs-center ${this.props.classNameActive} ${this.state.classNameDetailActive}`}>

        {/* Abstract */}
        <div className='t-home__carousel-item__abstract h-abs-full'>

          <div className='t-home__carousel-item__image h-abs-center h-abs-bg' style={{backgroundImage: `url(${this.props.bgSrc})`}}></div>
          <div className='t-home__carousel-item__image h-abs-center h-abs-bg' ></div>

          <span className='t-home__carousel-item__line-top h-abs-center-top'></span>
          <span className='t-home__carousel-item__line-bottom h-abs-center-bottom'></span>

          <span className='t-home__carousel-item__number'>{this.props.number}</span>
          {/* Open Detail */}
          <p onClick={this._openDetail.bind(this)} className='t-home__carousel-item__desc-top h-abs-center-top'>{this.props.action}</p>

          {/* Title */}
          <p className='t-home__carousel-item__desc-bottom h-abs-center-bottom'>{this.props.title}</p>
        </div>

        {/* Detail */}
        <div className='t-home__carousel-item__detail h-abs-full s-master'>

          {/* Close Detail */}
          <span onClick={this._closeDetail.bind(this)} className='t-home__carousel-item__detail-close'></span>

          <div dangerouslySetInnerHTML={{__html: this.props.detail}} />
        </div>
      </div>
    );
  }
}

export default TemplateHomeCarouselItem;