import React from 'react';

const TemplateHomeHeader = () => (

  <header className='t-home__header'>

    <div className='t-home__header-container h-table'>
      <div className='t-home__header-content h-table__cell'>

        <h2 className='t-home__top'>
          h2 title
        </h2>
        <h1 className='t-home__title'>
          <span>the main title</span>
          <span>goes here</span>
        </h1>

        <a href='mailto:mail@me.com' title='Mail me' className='t-home__bottom'>
          mail@me.com
        </a>
      </div>
    </div>
  </header>

);

export default TemplateHomeHeader;