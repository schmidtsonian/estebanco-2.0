export default class HomeHeroBullets {

  constructor() {

    console.log('HomeHeroBullets - constructor');

    this.namespace = 'js-hc';

    this.$scope = null;
    this.$$ = {};
    this.classHelpers = {};

    console.log('HomeHeroBullets - constructor done');
  }

  _cacheElements() {

    const {namespace} = this;

    this.$scope = $(`#${namespace}`);
    this.$$ = {
      btBullets: $(`#${namespace}__bt-bullets`),
      btItemOpen: $(`#${namespace}__bt-item-open`),
      btItemClose: $(`#${namespace}__bt-item-close`),
      item: $(`#${namespace}__item`),
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

    console.log('HomeHeroBullets - init');

    this
      ._cacheElements()
      ._bindings();

    console.log('HomeHeroBullets - done');
    return Promise.resolve();
  }
}
