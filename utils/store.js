import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reduxCatch from 'redux-catch';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';

import reducer from '../reducers';
import saga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = fromJS({
  posts: {},
  comments: {},
  errors: {},
});

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(
    reduxCatch((error, getState, lastAction) => {
      console.error('Error', error);
      console.debug('current state', getState());
      console.debug('last action', lastAction);
    }),
    logger,
    sagaMiddleware,
  ),
);

sagaMiddleware.run(saga);

export default store;
