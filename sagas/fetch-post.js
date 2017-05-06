import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import cuid from 'cuid';

import api from '../utils/api';

function* fetchPost(action) {
  try {
    const post = yield call(api.post, action.payload.id);
    yield put({
      type: 'ADD_POST',
      payload: post,
    });
  } catch (error) {
    const id = cuid();
    yield put({
      type: 'SET_ERROR',
      payload: {
        id,
        message: error.message,
      },
    });
    yield delay(2500);
    yield put({
      type: 'REMOVE_ERROR',
      payload: { id },
    });
  }
}

export default fetchPost;
