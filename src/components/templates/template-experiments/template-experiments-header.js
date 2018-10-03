import React, {Component} from 'react';

class TemplateExperimentsHeader extends Component {



  render() {

    const {title} = this.props;

    return (
      <header>
        <h1>{title}</h1>
      </header>
    );
  }
}

export default TemplateExperimentsHeader;
