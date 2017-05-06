import { Map as map } from 'immutable';

function errors(state = map(), action = {}) {
  switch (action.type) {
    case 'SET_ERROR': {
      return state.set(action.payload.id, action.payload.message);
    }
    case 'REMOVE_ERROR': {
      return state.remove(action.payload.id);
    }
    default: {
      return state;
    }
  }
}

export default errors;
