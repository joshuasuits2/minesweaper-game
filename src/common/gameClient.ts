export const SOCKET_ENDPOINT = 'wss://hometask.eg1236.com/game1/';

type Socket = WebSocket
class GameClient {
  private static _socket: Socket;

  public static get socket() {
    return this._socket;
  }

  public static set socket(socketConnection: Socket) {
    this._socket = socketConnection;
  }

  public static createConnection(url: string = SOCKET_ENDPOINT) {
    if (GameClient.socket) {
      return GameClient.socket;
    }
    const socketConnection = new WebSocket(url);
    GameClient.socket = socketConnection;
    return GameClient.socket;
  }
}

export {GameClient};
