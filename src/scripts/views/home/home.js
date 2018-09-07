import HomeHero from './home-hero/home-hero';

export default class Home {


  constructor() {

    console.log('Home - constructor');

    this.homeHero = null;

    console.log('Home - constructor done');
  }

  _cacheElements() {

    this.homeHero = new HomeHero();

    return this;
  }

  _bindings() {

    this.homeHero.init();

    return this;
  }


  async init() {

    console.log('Home - init');

    this
      ._cacheElements()
      ._bindings();

    console.log('Home - init done');
    return Promise.resolve();
  }
}
