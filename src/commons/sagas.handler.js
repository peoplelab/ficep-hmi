import { all } from 'redux-saga/effects';


const root = (watchers) => function*() { yield all(watchers); };


class SagasHandler {
  constructor(saga) {
    this.saga = saga;
    this.watchers = {};
  }

  run(key, list) {
    if (typeof key !== 'string' || !key) {
      return;
    }

    const task = root(list);
    this.watchers[key] = this.saga.run(task);
  }

  cancel(key) {
    if (typeof key !== 'string' || !key) {
      return;
    }

    if (!(key in this.watchers && 'cancel' in this.watchers[key])){
      return;
    }

    this.watchers[key].cancel();
  }
}


export default SagasHandler;
