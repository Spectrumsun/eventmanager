class MockLocalStorage {
  constructor() {
    this.data = {};
  }

  clear() {
    this.data = {};
  }

  getItem(item) {
    return this.data[item] || null;
  }

  setItem(item, value) {
    this.data[item] = value.toString();
  }

  removeItem(item) {
    delete this.data[item];
  }
}

global.localStorage = new MockLocalStorage();