import Nav from './nav';
import Home from '../views/home/home';

export default class MainLayout {

  constructor() {

    this.nav = new Nav();

    this.viewHome = new Home();
  }

  async _bindings() {

    await this.viewHome.init();
    await this.nav.init();

    return Promise.resolve();
  }

  async init() {

    await this._bindings();

    return Promise.resolve();
  }
}
