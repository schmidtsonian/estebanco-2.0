import Prismic from 'prismic-javascript';

export default class Api {

  constructor() {

    if (!Api.instance) {
      Api.instance = this;
    }

    this.API_ENDPOINT = 'https://estebanco.cdn.prismic.io/api/v2';
    this.API_TOKEN = 'MC5XNktGMENjQUFDa0F5NjF4.77-977-977-977-9TO-_vQLvv70RYe-_vSxNQTlPEgpy77-9au-_ve-_vVc077-977-977-977-9Ru-_vQ4';
    this.PAGES = ['home', 'experiments', 'experiment', '404'];

    this.api = null;
    this.pages = null;

    return Api.instance;
  }

  async getData(pageName='home') {

    await this._getPages();

    return(this.pages[pageName]);
  }

  async getExperiments() {

    await this._getPages();

    return(this.pages.experiment);
  }

  _getPages() {

    const {PAGES} = this;

    const p = new Promise((resolve) => {

      if(this.pages) {
        resolve(this.pages);
      }

      this._connect()
        .then(() => this.api.query(Prismic.Predicates.any('document.type', PAGES)))
        .then(
          (response) => {
            this.pages = this._normalizeData(response.results);
            resolve(this.pages);
          },
          (err) => console.log('error', err)
        );
    })

    return p;
  }

  _connect() {

    const p = new Promise((resolve) => {

      if(this.api) {
        resolve();
      } else {
        const {API_ENDPOINT, API_TOKEN} = this;

        Prismic.getApi(API_ENDPOINT, {accessToken: API_TOKEN})
        .then((api) => {
            this.api = api;
            resolve();
          });
      }
    });

    return p;
  }

  _normalizeData(data) {

    // TODO: create models
    // right now the model is clone
    // of the index.js and experiments.js: state data{}

    let dataHome = {};
    let dataExperiments = {
      title: '',
      description: '',
      items: [],
    };

    let data404 = {
      title: '',
      description: '',
    }

    data.map((page) => {

      switch (page.type) {
        case 'experiments':
          dataExperiments.title = page.data.title;
          dataExperiments.description = page.data.description;

          break;

        case 'experiment':
          dataExperiments.items.push(page.data);
          break;

        case 'home':
          dataHome = page.data;
          break;
        case '404':
          data404 = page.data;
        // eslint-disable-next-line
        default:
          break;
      }

      return {dataExperiments, dataHome, data404};
    });

    return {
      home: dataHome,
      experiments: dataExperiments,
      notFound: data404
    };
  }
}