import React, {Component} from 'react';
import Helmet from 'react-helmet';

import Header from './molecules/Header/Header';

import '../styles/main.scss';

class Layout extends Component {

  constructor(props) {

    super(props);

    this.helper = {
      classMenuActive: 'is-menuopen'
    }

    this.state = {
      isMenuOpen: false,
      classMenuActive: ''
    };
  }

  _toggleMenu() {

    const {helper} = this;

    const isMenuOpen = !this.state.isMenuOpen;
    const classMenuActive = this.state.isMenuOpen ? '' : helper.classMenuActive;
    this.setState({
      isMenuOpen: isMenuOpen,
      classMenuActive: classMenuActive
    });
  }

  render() {

    return (
      <div className={`l-main ${this.state.classMenuActive}`}>
        <Helmet
          title={'some title'}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={'some title'} />

        <span className='l-nav-toggle' onClick={this._toggleMenu.bind(this)}>
          <span className='h-abs-center'></span>
          <span className='h-abs-center'></span>
          <span className='h-abs-center'></span>
        </span>

        <main className='l-container'>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;