import React, {Component} from 'react';

class TemplateExperimentsGridCard extends Component {

  render() {
    const {title, content} = this.props;

    return (
      <div className='t-experiments__card col-6 col-sm-4 col-md-3'>

        <div className='h-table h-text-align-center'>
          <div className='h-table__cell'>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{__html: content}} />
          </div>
        </div>

      </div>
    );
  }
}

export default TemplateExperimentsGridCard;
