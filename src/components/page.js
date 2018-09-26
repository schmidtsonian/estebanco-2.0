import {Component} from 'react';
import Api from '../utils/api';

export default class Page extends Component {

  constructor(props) {

    super(props);

    this.api = new Api();
    this.dataName = 'home';

    this.state = {
      data: {}
    };
  }

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
