export default class Nav {

  constructor() {

    console.log('Nav - constructor');

    this.$$ = {};
    this.helpers = {
      nameClassActive: 'is-menuopen'
    };

    this.isMenuOpen = false;
    console.log('Nav - constructor done');
  }

  _cacheElements() {

    this.$$ = {
      document: $(document),
      body: $('body'),
      btMenu: $('#js-bt-nav')
    };

    return this;
  }

  _bindings() {

    const {$$} = this;

    $$.btMenu.on('click', () => this._toggleNav());

    $$.document.on('keyup', (e) => {
      if (e.keyCode === 27 && this.isMenuOpen === true) {
        this._close();
      }
    });

    return this;
  }

  _toggleNav() {

    const {$$, helpers} = this;

    this.isMenuOpen = !this.isMenuOpen;
    $$.body.toggleClass(helpers.nameClassActive, this.isMenuOpen);

    return this;
  }

  _close() {

    this.isMenuOpen = true;

    this._toggleNav();

    return this;
  }

  async init() {

    this
      ._cacheElements()
      ._bindings();

    return Promise.resolve();
  }
}
