const BASE_URL = 'https://jsonplaceholder.typicode.com';

class API {
  async posts(page = 1) {
    const response = await fetch(`${BASE_URL}/posts?_page=${page}`);
    return response.json();
  }

  async post(id) {
    console.log('Fetching %s', `${BASE_URL}/posts/${id}`);
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    return response.json();
  }

  async comments(id) {
    const response = await fetch(`${BASE_URL}/posts/${id}/comments`);
    return response.json();
  }

  async user(id) {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    return response.json();
  }
}

export default new API();
