import React from 'react';

const TemplateHomeHeader = ({data}) => {

  console.log(data);

  return (

    <header className='t-home__header'>

      <div className='t-home__header-container h-table'>
        <div className='t-home__header-content h-table__cell'>

          <h2 className='t-home__top'>
            {data.subtitle}
          </h2>
          <h1 className='t-home__title'>
            {data.title.map((text, i) =>
              <span key={i}>{text}</span>
            )}
          </h1>

          <a href={`mailto:${data.email}`} title='Mail me' className='t-home__bottom'>
            {data.email}
          </a>
        </div>
      </div>
    </header>

  );
}

export default TemplateHomeHeader;