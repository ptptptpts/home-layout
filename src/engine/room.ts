export interface RoomConfig {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  color: string;
}

export const DEFAULT_ROOM_SIZE = {
  WIDTH: 200,
  HEIGHT: 150,
};

/**
 * Creates a new room configuration with default dimensions
 */
export const createRoom = (id: string, x: number, y: number, label: string): RoomConfig => {
  return {
    id,
    x,
    y,
    width: DEFAULT_ROOM_SIZE.WIDTH,
    height: DEFAULT_ROOM_SIZE.HEIGHT,
    label,
    color: '#e2e8f0', // Tailwind slate-200
  };
};
