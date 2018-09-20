import Prismic from 'prismic-javascript';
import React, {Component} from 'react';
import Layout from '../components/layout';
import TemplateHome from '../components/templates/TemplateHome/TemplateHome';


class IndexPage extends Component {

  constructor(props) {

    super(props);

    this.state = {
      data: {
        home: {
          title_line_1: '',
          title_line_2: '',
          subtitle: '',
          email: '',
          carousel: []
        },
        experiments: []
      }
    };
  }

  componentDidMount() {

    const API_ENDPOINT = 'https://estebanco.cdn.prismic.io/api/v2';
    const API_TOKEN = "MC5XNktGMENjQUFDa0F5NjF4.77-977-977-977-9TO-_vQLvv70RYe-_vSxNQTlPEgpy77-9au-_ve-_vVc077-977-977-977-9Ru-_vQ4";

    Prismic.getApi(API_ENDPOINT, {accessToken: API_TOKEN})
      .then((api) => {
        return api.query(
          Prismic.Predicates.any('document.type', ['home', 'experiment'])
        );
      }).then(
        (response) => this._normalizeData(response.results),
        (err) => {
          console.log('Something went wrong: ', err);
        }
      );
  }

  render() {

    return (
      <Layout>
      <TemplateHome data={this.state.data}/>
      </Layout>

    );
  }

  _normalizeData(data) {

    let dataHome = {};
    let dataExperiments = [];

    data.map((page) => {

      switch (page.type) {
        case 'experiment':
          dataExperiments.push(page.data);
          break;

        case 'home':
          dataHome = page.data;
          break;

        default: break;
      }

      return {dataExperiments, dataHome};
    });

    this.setState({data:{
      home: dataHome,
      experiments: dataExperiments
    }});
  }
}



export default IndexPage;
