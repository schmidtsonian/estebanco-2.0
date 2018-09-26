import React, {Component} from 'react';
import Helmet from 'react-helmet';

import Header from '../components/molecules/header/header';
import {MainProvider, MainContext} from '../contexts/main-context';
import '../styles/main.scss';

class Layout extends Component {

  render() {

    return (
      <MainProvider>
        <MainContext.Consumer>
          {({toggleManu, classMenuActive}) => (
            <div className={`l-main ${classMenuActive}`}>
              <Helmet
                title={'some title'}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              />
              <Header siteTitle={'some title'} />

              <span className='l-nav-toggle' onClick={toggleManu}>
                <span className='h-abs-center'></span>
                <span className='h-abs-center'></span>
                <span className='h-abs-center'></span>
              </span>

              <main className='l-container'>
                {this.props.children}
              </main>
            </div>
          )}
        </MainContext.Consumer>
      </MainProvider>
    );
  }

  componentWillUnmount() {
    console.log('Layout componentWillUnmount');
  }

  componentDidMount() {
    console.log('Layout componentDidMount //start api');
    // console.log(this.props.location.pathname);
  }
}

export default Layout;