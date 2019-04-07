import React, {Component} from 'react';

class TemplateExperimentsGridCard extends Component {

  render() {
    const {title, content, index} = this.props;

    return (
      <div className='t-experiments__card col-xs-6 col-sm-4 col-md-3'>
        <span className='t-experiments__card-index'>{index}</span>
        <div className='h-table'>
          <div className='h-table__cell'>
            <h2 className='t-experiments__card-title'>{title}</h2>
            <div className='t-experiments__card-content' dangerouslySetInnerHTML={{__html: content}} />
          </div>
        </div>

      </div>
    );
  }
}

export default TemplateExperimentsGridCard;
