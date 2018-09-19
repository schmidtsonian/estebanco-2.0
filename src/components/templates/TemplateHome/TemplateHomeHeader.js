import React, {Component} from 'react';

class TemplateHomeHeader extends Component {

  render() {

    const {props} = this;
    return (

      <header className='t-home__header'>

        <div className='t-home__header-container h-table'>
          <div className='t-home__header-content h-table__cell'>

            <h2 className='t-home__top'>
              {props.subtitle}
            </h2>
            <h1 className='t-home__title'>
              <span>{props.title_line_1}</span>
              <span>{props.title_line_2}</span>
            </h1>

            <a href={`mailto:${props.email}`} title='Mail me' className='t-home__bottom'>
              {props.email}
            </a>
          </div>
        </div>
        </header>

    );
  }
}

export default TemplateHomeHeader;