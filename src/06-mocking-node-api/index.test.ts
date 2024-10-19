// Uncomment the code below and write your tests
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // Write your test here
    jest.spyOn(global, 'setTimeout');

    const cb = () => 'test';
    doStuffByTimeout(cb, 5000);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(cb, 5000);
  });

  test('should call callback only after timeout', () => {
    // Write your test here
    jest.spyOn(global, 'setTimeout');

    const cb = jest.fn();
    doStuffByTimeout(cb, 5000);

    expect(setTimeout).toHaveBeenCalledTimes(1);

    expect(cb).not.toHaveBeenCalled();

    jest.runAllTimers();

    expect(cb).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
    jest.spyOn(global, 'setInterval');

    const cb = () => 'test';
    doStuffByInterval(cb, 5000);

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledWith(cb, 5000);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
    jest.spyOn(global, 'setInterval');

    const cb = jest.fn();
    doStuffByInterval(cb, 5000);

    expect(setInterval).toHaveBeenCalledTimes(1);

    expect(cb).not.toHaveBeenCalled();

    jest.runOnlyPendingTimers();
    jest.runOnlyPendingTimers();

    expect(cb).toHaveBeenCalledTimes(2);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
    const file = 'test_path.txt';
    jest.spyOn(path, 'join').mockImplementationOnce(() => file);
    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(false);

    await readFileAsynchronously(file);

    expect(path.join).toHaveBeenCalledWith(__dirname, file);
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
    const file = 'test_path.txt';
    jest.spyOn(path, 'join').mockImplementationOnce(() => file);
    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(false);

    const result = await readFileAsynchronously(file);

    expect(result).toEqual(null);
  });

  test('should return file content if file exists', async () => {
    // Write your test here
    const file = 'test_path.txt';
    const content = 'Test read file';
    jest.spyOn(path, 'join').mockImplementationOnce(() => file);
    jest.spyOn(fs, 'existsSync').mockImplementationOnce(() => true);
    jest.spyOn(fsPromises, 'readFile').mockResolvedValueOnce(content);

    const result = await readFileAsynchronously(file);

    expect(result).toEqual(content);
  });
});
