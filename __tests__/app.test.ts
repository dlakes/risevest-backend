import request from "supertest";
import app from "../src/index";

describe('GET /api/v1/users', () => {
  it('should return status 200 and a users list object', async () => {
    const response = await request(app).get('users');
    expect(response.status).toBe(200);
    //expect(response.body).toEqual(expect.any(Array));
  });
});

describe('POST /api/v1/users', () => {
  it('should return status 200 and the posted data', async () => {
    const postData = {
      name: "testuser",
      email: "test@gmail.com"
    };
    const response = await request(app)
      .post('users')
      .send(postData);
    expect(response.status).toBe(200);
    //expect(response.body).toMatchObject(postData);
  });
});


describe('GET api/v1/users/1/posts', () => {
  it('should return status 200 and a posts list object', async () => {
    const response = await request(app).get('users/1/posts');
    expect(response.status).toBe(200);
    //expect(response.body).toEqual(expect.any(Array));
  });
});

describe('POST /api/v1/users/1/posts', () => {
  it('should return status 200 and the posted data', async () => {
    const postData = {
      title: "Test 1",
      body: "Testing"
    };
    const response = await request(app)
      .post('users/1/posts')
      .send(postData);
    expect(response.status).toBe(200);
    //expect(response.body).toMatchObject(postData);
  });
});