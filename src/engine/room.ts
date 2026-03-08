export interface RoomConfig {
  id: string;
  width: number;
  height: number;
  x: number;
  y: number;
  label: string;
}

/**
 * Creates a default room configuration
 */
export const createRoom = (id: string, width: number, height: number): RoomConfig => {
  return {
    id,
    width,
    height,
    x: 0,
    y: 0,
    label: 'New Room',
  };
};
