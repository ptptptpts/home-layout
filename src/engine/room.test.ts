import { describe, it, expect } from 'vitest';
import { createRoom, DEFAULT_ROOM_SIZE } from './room';

describe('Room Engine Logic', () => {
  it('should create a room with default dimensions', () => {
    const room = createRoom('1', 10, 20, 'Living Room');
    
    expect(room).toEqual({
      id: '1',
      x: 10,
      y: 20,
      width: DEFAULT_ROOM_SIZE.WIDTH,
      height: DEFAULT_ROOM_SIZE.HEIGHT,
      label: 'Living Room',
      color: '#e2e8f0',
    });
  });
});
