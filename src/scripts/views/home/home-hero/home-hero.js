import HomeHeroBullets from './home-hero-bullets';
import HomeHeroItemDetail from './home-hero-item-detail';

export default class HomeHero {

  constructor() {

    console.log('HomeHero - constructor');

    this.bullets = null;
    this.itemDetail = null;

    console.log('HomeHero - constructor done');
  }

  _cacheElements() {

    this.bullets = new HomeHeroBullets();
    this.itemDetail = new HomeHeroItemDetail();

    return this;
  }

  _bindings() {

    this.bullets.init();
    this.itemDetail.init();

    return this;
  }

  async init() {

    console.log('HomeHero - init');

    this
      ._cacheElements()
      ._bindings();

    console.log('HomeHero - init done');
    return Promise.resolve();
  }
}
