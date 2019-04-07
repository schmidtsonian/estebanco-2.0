import React, {Component} from 'react';

class TemplateExperimentsGridCard extends Component {

  render() {
    const {title, content, index} = this.props;

    return (
      <div className='t-experiments__card col-xs-12 col-md-6 col-lg-4'>
        <span className='t-experiments__card-index'>{index}</span>
        <h2 className='t-experiments__card-title'>{title}</h2>
        <div className='t-experiments__card-content' dangerouslySetInnerHTML={{__html: content}} />

      </div>
    );
  }
}

export default TemplateExperimentsGridCard;
