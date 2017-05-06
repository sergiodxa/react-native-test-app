import { Map as map } from 'immutable';

function posts(state = map(), action = {}) {
  switch (action.type) {
    case 'ADD_POST': {
      return state.set(action.payload.id, map(action.payload));
    }
    default: {
      return state;
    }
  }
}

export default posts;
