import React from 'react'
import Link from 'gatsby-link'

const Header = ({siteTitle}) => (

  <nav className='l-nav'>
    <div className='l-nav__content l-nav__content--front h-table'>
      <div className='l-nav__links h-table__cell'>

        <Link to='/' activeClassName='is-active' className='l-nav__link'  title='Home'>
          <span className='l-nav__link__bg'></span>
          <span className='l-nav__link__text'>Home</span>
        </Link>

        <Link to='/experiments' activeClassName='is-active' className='l-nav__link'  title='Experiments'>
          <span className='l-nav__link__bg'></span>
          <span className='l-nav__link__text'>Experiments</span>
        </Link>
      </div>
    </div>
  </nav>
);

export default Header