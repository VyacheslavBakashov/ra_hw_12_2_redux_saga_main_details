import { applyMiddleware, compose, legacy_createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { watchServices } from '../effects';
import { rootReducer } from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
  yield all([fork(watchServices)]);
}

sagaMiddleware.run(rootSaga);

export type AppDispatchTypes = typeof store.dispatch;
export type RootStateTypes = ReturnType<typeof store.getState>;