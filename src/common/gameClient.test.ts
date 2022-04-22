import {GameClient} from './gameClient';

describe('GameClient', () => {
  test('createConnection should connect to socket with valid url', () => {
    const url = 'invalid_url';
    function createConnection() {
      GameClient.createConnection(url);
    }
    expect(createConnection).toThrow(new Error(`The URL '${url}' is invalid.`));
  });
  test('createConnection should connect to socket with valid url', () => {
    const socket = GameClient.createConnection();
    expect(socket).toBe(GameClient.socket);
  });
  test('createConnection should return socket instance if it exist', () => {
    const socket = GameClient.createConnection();
    expect(socket).toBe(GameClient.socket);
  });
});
