import React from 'react';
import PropTypes from 'prop-types';

import Template from '../template';

class Template404 extends Template {

  static propTypes = {
    // eslint-disable-next-line
    ...Template404.propTypes,
    data: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  };

  static defaultProps = {
    ...Template404.defaultProps,

    // Model definition
    data: {
      title: '',
      description: '',
    }
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

    const {data} = this.props;

    // TODO: Create abstract Class for this logic
    const {classDataReady} = this.state;

    return(
      <section className='t-404'>
        <header className='t-404__header h-abs-center'>
          <h1 className={`t-404__title h-dtext h-dtext--grey  ${classDataReady}`}>{data.title}</h1>
          <p className={`t-404__desc h-dtext h-dtext--grey ${classDataReady}`}>{data.description}</p>
        </header>
      </section>
    )
  }
}

export default Template404;
