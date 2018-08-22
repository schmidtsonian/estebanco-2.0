import MainLayout from './layout/main-layout';

export default class App {

  constructor() {

    console.log('App - constructor');

    this.mainLayout = new MainLayout();
    console.log('App - constructor done');
  }

  async _bindings() {

    console.log('App - bindings');

    await this.mainLayout.init();

    console.log('App - bindings done');
    return Promise.resolve();
  }

  init() {

    console.log('App - Init');
    this._bindings();

    console.log('App - Init done');
    return this;
  }
}
