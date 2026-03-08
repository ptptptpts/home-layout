import { describe, it, expect } from 'vitest';
import { createRoom } from '../room';

describe('Room Engine Logic', () => {
  it('should create a room with correct dimensions and position', () => {
    const room = createRoom('room-1', { width: 100, height: 100 }, { x: 50, y: 50 });
    
    expect(room).toEqual({
      id: 'room-1',
      width: 100,
      height: 100,
      x: 50,
      y: 50,
      label: 'New Room'
    });
  });
});
