import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TemplateHomeHeader extends Component {

  static propTypes = {
    subtitle: PropTypes.string,
    title_line_1: PropTypes.string,
    title_line_2: PropTypes.string,
    email: PropTypes.string,
  };

  static defaultProps = {
    subtitle: '',
    title_line_1: '',
    title_line_2: '',
    email: '',
  };

  render() {

    const {props} = this;
    return (

      <header className='t-home__header'>

        <div className='t-home__header-container h-table'>
          <div className='t-home__header-content h-table__cell'>

            <h2 className='t-home__top'> {props.subtitle} </h2>

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
