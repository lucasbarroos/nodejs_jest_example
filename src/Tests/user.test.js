const request = require('request');

describe('User Test Started', () => {
  test('Create User Route', async () => {
    request.post('http://localhost:3000/user', { json: true }, (err, res, body) => {
      expect(res.statusCode).toEqual(200);
    });
  });

  test('Get Users Route', async () => {
    request('http://localhost:3000/users', { json: true }, (err, res, body) => {
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray([body])).toEqual(true);
    });
  });
});
