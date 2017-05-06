import { combineReducers } from 'redux-immutable';

import posts from './posts';
import comments from './comments';
import errors from './errors';

export default combineReducers({
  posts,
  comments,
  errors,
});
