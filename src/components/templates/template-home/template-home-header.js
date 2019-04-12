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
    subtitle: '-',
    title_line_1: '-',
    title_line_2: '-',
    email: '-',
  };

  state = {
    classDataReady: ''
  };

  componentWillReceiveProps(newProps) {

    const {props} = this;
    const hasNewData = newProps !== props;

    // TODO: validate first load
    if (hasNewData === true) {
      this.setState({classDataReady: 'is-ready'});
    }
  }


  render() {

    const {props} = this;
    // TODO: Create abstract Class for this logic
    const {classDataReady} = this.state;

    return (

      <header className='t-home__header'>

        <div className='t-home__header-container h-table'>
          <div className='t-home__header-content h-table__cell'>

            <h2 className={`t-home__top h-dtext h-dtext--40 ${classDataReady}`}>
              {props.subtitle}
            </h2>

            <h1 className='t-home__title'>
              <span className={`h-dtext h-dtext--80 ${classDataReady}`}>{props.title_line_1}</span>
              <span className={`h-dtext ${classDataReady}`}>{props.title_line_2}</span>
            </h1>

            <a href={`mailto:${props.email}`} title='Mail me' className={`t-home__bottom h-dtext h-dtext--90 h-anchor ${classDataReady}`}>
              {props.email}
            </a>
          </div>
        </div>
        </header>

    );
  }
}

export default TemplateHomeHeader;
