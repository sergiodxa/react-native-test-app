import errors from './errors';

const id = 'cj2dpiavu00002mvdtmcx6ucw';

const setAction = {
  type: 'SET_ERROR',
  payload: {
    id,
    message: 'Failed to fetch from API',
  },
};

const removeAction = {
  type: 'REMOVE_ERROR',
  payload: { id },
};


describe('errors reducer', () => {
  let state;

  beforeAll(() => {
    state = errors();
  });

  it('should set a new error message', () => {
    state = errors(state, setAction);
    expect(state).toMatchSnapshot();
  });

  it('should remove an error message', () => {
    state = errors(state, removeAction);
    expect(state).toMatchSnapshot();
  });
});
