import posts from './posts';

const action = {
  type: 'ADD_POST',
  payload: {
    id: 1,
    userId: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
};

describe('posts reducer', () => {
  it('should add a new post', () => {
    const state = posts(undefined, action);
    expect(state).toMatchSnapshot();
  });
});
