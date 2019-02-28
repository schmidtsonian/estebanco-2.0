import React, {Component} from 'react';

class TemplateExperimentsHeader extends Component {

  render() {

    const {title, description} = this.props;

    return (
      <header className='t-experiments__header'>
        <h1 className='t-experiments__title'>{title}</h1>
        <h2 className='t-experiments__desc'>{description}</h2>
      </header>
    );
  }
}

export default TemplateExperimentsHeader;
