import HomeHeroBullets from './home-hero-bullets';
import HomeHeroItemDetail from './home-hero-item-detail';
import HomeHeroCarousel from './home-hero-carousel';

export default class HomeHero {

  constructor() {

    console.log('HomeHero - constructor');

    this.bullets = null;
    this.itemDetail = null;
    this.carousel = null;

    console.log('HomeHero - constructor done');
  }

  _cacheElements() {

    this.bullets = new HomeHeroBullets();
    this.itemDetail = new HomeHeroItemDetail();
    this.carousel = new HomeHeroCarousel();

    return this;
  }

  _bindings() {

    this.bullets.init();
    this.itemDetail.init();
    this.carousel.init();

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
