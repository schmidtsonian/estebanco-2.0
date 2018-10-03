import {Component} from 'react';
import Api from '../utils/api';

export default class Page extends Component {

  api = new Api();
  dataName = 'home';

  state = {
    data: {}
  };

  componentDidMount() {
    console.log(`Page ${this.dataName}: componentDidMount`);
    this._fetchData();
  }

  _fetchData() {

    const {dataName} = this;

    this.api
      .getData(dataName)
      .then((data) => this.setState({data: data}));

    return {empty: true};
  }
}
