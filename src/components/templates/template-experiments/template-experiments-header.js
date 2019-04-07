import React, {Component} from 'react';

class TemplateExperimentsHeader extends Component {

  state = {
    classDataReady: ''
  };

  componentWillReceiveProps(newProps) {

    const {props} = this;
    const hasNewData = newProps !== props;
    if (hasNewData === true) {

      // TODO: validate first load
      this.setState({classDataReady: 'is-ready'});
    }
  }

  render() {

    const {title, description} = this.props;

    // TODO: Create abstract Class for this logic
    const {classDataReady} = this.state;

    return (
      <header className='t-experiments__header'>
        <h1 className={`t-experiments__title h-dtext h-dtext--grey h-dtext--80 ${classDataReady}`}>{title}</h1>
        <h2 className={`t-experiments__desc h-dtext h-dtext--grey h-dtext--70 ${classDataReady}`}>{description}</h2>
      </header>
    );
  }
}

export default TemplateExperimentsHeader;
