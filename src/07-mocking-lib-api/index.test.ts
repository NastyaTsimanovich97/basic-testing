// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    // Write your test here
    const createSpy = jest.spyOn(axios, 'create');
    axios.Axios.prototype.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: {} }));

    await throttledGetDataFromApi('');

    jest.runAllTimers();

    expect(createSpy).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const getSpy = jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockImplementationOnce(() => Promise.resolve({ data: {} }));

    await throttledGetDataFromApi('path/to/url');

    jest.runAllTimers();

    expect(getSpy).toHaveBeenCalledWith('path/to/url');
  });

  test('should return response data', async () => {
    // Write your test here
    axios.Axios.prototype.get = jest
      .fn()
      .mockImplementationOnce(() =>
        Promise.resolve({ data: { message: 'Test content!' } }),
      );

    const result = await throttledGetDataFromApi('');

    expect(result).toStrictEqual({ message: 'Test content!' });

    jest.runAllTimers();
  });
});
