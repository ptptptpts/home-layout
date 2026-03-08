import { describe, it, expect } from 'vitest';
import { createRoom } from './room';

describe('Room Engine', () => {
  it('should create a room with specified dimensions', () => {
    const room = createRoom('1', 500, 400);
    expect(room.width).toBe(500);
    expect(room.height).toBe(400);
    expect(room.id).toBe('1');
  });
});
