import React, {Component} from 'react';
// import Helmet from 'react-helmet';

import Transition from '../components/transition';
import Header from './navigation';
import SEO from './seo';
import {MainProvider, MainContext} from '../contexts/main-context';
import '../styles/main.scss';
import isTouchDevice from '../utils/is-touch-device';

class Layout extends Component {

  helper = {
    classMenuActive: 'is-menuopen',
    classIsMobile: 'is-mobile'
  }

  state = {
    classMenuActive: '',
    classIsMobile: ''
  };

  onUnmountPage() {
    console.log('>>>>');
  }

  toggleMenu() {

    const {helper} = this;

    const classMenuActive = this.state.classMenuActive === '' ? helper.classMenuActive : '';

    this.setState({
      classMenuActive: classMenuActive
    });
  }

  _closeMenu() {

    this.setState({classMenuActive: ''});
  }

  shouldComponentUpdate(nexProps) {
    console.log('Layout shouldComponentUpdate');
    if(nexProps.location.pathname !== this.props.location.pathname) {
      this._closeMenu();
    }

    return true;
  }

  componentWillMount() {

    const {helper} = this;

    const classIsMobile = isTouchDevice() ? helper.classIsMobile : '';
    
    this.setState({classIsMobile: classIsMobile});
  }

  render() {

    const {classMenuActive, classIsMobile} = this.state;
    const {location, children} = this.props

    return (
      <MainProvider >
        <MainContext.Consumer >
          {() => (
            <div className={`l-main ${classMenuActive} ${classIsMobile}`}>
              <SEO/>
              <Header onClick={this.toggleMenu.bind(this)}/>

              <main className='l-container'>

                <Transition location={location}>
                  {children}
                </Transition>
              </main>
            </div>
          )}
        </MainContext.Consumer>
      </MainProvider>
    );
  }

  componentDidUpdate() {
    console.log('Layout componentDidUpdate');
  }


  componentWillUnmount() {
    console.log('Layout componentWillUnmount');
  }

  componentDidMount() {
    console.log('Layout componentDidMount //start api');
  }
}

export default Layout;