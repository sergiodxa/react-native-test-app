import { Map as map } from 'immutable';

function comments(state = map(), action = {}) {
  switch (action.type) {
    case 'ADD_COMMENT': {
      return state.set(action.payload.id, map(action.payload));
    }
    default: {
      return state;
    }
  }
}

export default comments;
