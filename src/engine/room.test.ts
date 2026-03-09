import { describe, it, expect } from 'vitest';
import { createRoom, DEFAULT_ROOM_SIZE } from './room';

describe('Room Engine', () => {
  it('should create a room with default dimensions', () => {
    const room = createRoom('1', 'Test Room');
    expect(room.width).toBe(DEFAULT_ROOM_SIZE);
    expect(room.height).toBe(DEFAULT_ROOM_SIZE);
    expect(room.name).toBe('Test Room');
  });
});
