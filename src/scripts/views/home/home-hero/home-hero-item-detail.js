export default class HomeHeroItemDetail {

  constructor() {

    console.log('HomeHeroItemDetail - constructor');

    this.namespace = 'js-hc';

    this.$scope = null;
    this.$$ = {};
    this.classHelpers = {};

    console.log('HomeHeroItemDetail - constructor done');
  }

  _cacheElements() {

    const {namespace} = this;

    this.$scope = $(`#${namespace}`);
    this.$$ = {
      item: $(`.${namespace}__item`),
      btOpenDetail: $(`.${namespace}__bt-item-open`),
      btCloseDetail: $(`.${namespace}__bt-item-close`),
    };

    this.classHelpers = {
      activeDetail: 'is-open',
    };

    return this;
  }

  _bindings() {

    const {$$} = this;

    console.log(this);
    $$.btOpenDetail.on('click', (e) => this._openDetail(e));
    $$.btCloseDetail.on('click', () => this._closeDetail());

    return this;
  }

  _openDetail(e) {

    const {classHelpers} = this;
    const $item = $(e.currentTarget).parent().parent();

    this._closeDetail();

    $item.addClass(classHelpers.activeDetail);

    return this;
  }

  _closeDetail() {

    const {$$, classHelpers} = this;

    $$.item.removeClass(classHelpers.activeDetail);

    return this;
  }

  async init() {

    console.log('HomeHeroItemDetail - init');

    this
      ._cacheElements()
      ._bindings();

    console.log('HomeHeroItemDetail - init done');

    return Promise.resolve();
  }
}
