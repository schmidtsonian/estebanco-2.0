export default class HomeCarousel {

  constructor() {

    console.log('View Home Carousel - constructor');

    this.namespace = 'js-home-carousel';

    this.$scope = null;
    this.$$ = {};
    this.classHelpers = {};
  }

  _cacheElements() {

    this.$scope = $(`#${this.namespace}`);
    this.$$ = {
      btBullets: $(`#${this.namespace}__bt-bullets`),
    };

    this.classHelpers = {
      activeBullets: 'is-bullets',
    };

    return this;
  }

  _bindings() {

    const {$$} = this;

    $$.btBullets.on('click', () => this._activeBullets());

    return this;
  }

  _activeBullets() {

    const {$scope, classHelpers} = this;

    $scope.toggleClass(classHelpers.activeBullets);

    return this;
  }

  async init() {

    console.log('View Home Carousel - init');

    this
      ._cacheElements()
      ._bindings();
    return Promise.resolve();
  }
}
