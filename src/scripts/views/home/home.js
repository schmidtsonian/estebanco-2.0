import HomeCarousel from './home-carousel';

export default class Home {


  constructor() {

    this.carousel = null;
  }

  _cacheElements() {

    this.carousel = new HomeCarousel();

    return this;
  }

  _bindings() {

    this.carousel.init();

    return this;
  }


  async init() {

    this
      ._cacheElements()
      ._bindings();

    return Promise.resolve();
  }
}
