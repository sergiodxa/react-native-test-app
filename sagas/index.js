import { takeEvery } from 'redux-saga/effects';

import fetchPost from './fetch-post';

function* saga() {
  try {
    yield takeEvery('FETCH_POST', fetchPost);
  } catch (error) {
    console.error(error);
  }
}

export default saga;
