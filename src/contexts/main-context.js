import React, {Component} from 'react';

export const MainContext = React.createContext();

export class MainProvider extends Component {

  render() {

    // TODO: Make notes about this, I don't remember what is this for
    return (
      <MainContext.Provider value={{
        ...this.state,
        onUnmountPage: () => {this._onUnmountPage()},
        onMountPage: (params) => {this._onMountPage(params)},
      }}>
        {this.props.children}
      </MainContext.Provider>
    );
  }


  _onUnmountPage() {
    console.log('MainProvider onUnmountPage');
  }

  _onMountPage(params) {
    console.log('MainProvider onMountPage', params);
  }
}