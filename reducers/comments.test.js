import comments from './comments';

const action = {
  type: 'ADD_COMMENT',
  payload: {
    id: 1,
    postId: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium',
  },
};

describe('comments reducer', () => {
  it('should add a new comment', () => {
    const state = comments(undefined, action);
    expect(state).toMatchSnapshot();
  });
});
