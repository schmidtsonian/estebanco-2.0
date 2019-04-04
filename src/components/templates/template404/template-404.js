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
        <div className='h-abs-center'>
          <h1 className={`h-dtext h-dtext--grey h-dtext--80 ${classDataReady}`}>{data.title}</h1>
          <p className={`h-dtext h-dtext--grey ${classDataReady}`}>{data.description}</p>
        </div>
      </section>
    )
  }
}

export default Template404;
