import React, {Component} from 'react';

export const MainContext = React.createContext();

export class MainProvider extends Component {

  constructor(props){
    super(props);

    this.helper = {
      classMenuActive: 'is-menuopen'
    }

    this.state = {
      classMenuActive: ''
    };
  }

  render() {

    return (
      <MainContext.Provider value={{
        ...this.state,
        onUnmountPage: () => {this._onUnmountPage()},
        onMountPage: (params) => {this._onMountPage(params)},
        toggleManu: () => {this._toggleMenu()}
      }}>
        {this.props.children}
      </MainContext.Provider>
    );
  }

  _toggleMenu() {
    const {helper} = this;

    const classMenuActive = this.state.classMenuActive === '' ? helper.classMenuActive : '';

    this.setState({
      classMenuActive: classMenuActive
    });
  }

  _closeMenu() {

    this.setState({classMenuActive: ''});
  }

  _onUnmountPage() {
    console.log('MainProvider onUnmountPage');
    this._closeMenu();
  }

  _onMountPage(params) {
    console.log('MainProvider onMountPage', params);
  }
}