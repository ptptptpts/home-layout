import { Room } from './types';

export const DEFAULT_ROOM_SIZE = 200;

export function createRoom(id: string, name: string, x = 0, y = 0): Room {
  return {
    id,
    name,
    x,
    y,
    width: DEFAULT_ROOM_SIZE,
    height: DEFAULT_ROOM_SIZE,
    zIndex: 0,
  };
}
