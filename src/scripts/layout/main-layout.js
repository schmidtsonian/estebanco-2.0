import Nav from './nav';

export default class MainLayout {

  constructor() {

    this.nav = new Nav();
  }

  async _bindings() {

    await this.nav.init();

    return Promise.resolve();
  }

  async init() {

    await this._bindings();

    return Promise.resolve();
  }
}
