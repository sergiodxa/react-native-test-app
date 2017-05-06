import fetchPost from './fetch-post';

const action = {
  type: 'FETCH_POST',
  payload: { id: 1 },
};

describe('fetchPost saga - success', () => {
  let saga;

  beforeAll(() => {
    saga = fetchPost(action);
  });

  it('should return an api call effect', () => {
    const call = saga.next().value;
    expect(call).toMatchSnapshot();
  });

  it('should return a put effect', () => {
    const put = saga.next({
      id: 1,
      userId: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    }).value;
    expect(put).toMatchSnapshot();
  });

  it('should be done', () => {
    expect(saga.next().done).toBeTruthy();
  });
});

describe('fetchPost saga - failure', () => {
  let saga;

  beforeAll(() => {
    saga = fetchPost(action);
  });

  it('should return an api call effect', () => {
    const call = saga.next().value;
    expect(call).toMatchSnapshot();
  });

  it('should return a put effect', () => {
    const put = saga.next(new Error('test error')).value;
    expect(put).toMatchSnapshot();
  });

  it('should return a delay effect', () => {
    const delay = saga.next().value;
    expect(delay).toMatchSnapshot();
  });

  it('should return a put effect', () => {
    const put = saga.next().value;
    expect(put).toMatchSnapshot();
  });
});
