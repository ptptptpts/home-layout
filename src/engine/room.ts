export interface RoomDimensions {
  width: number;
  height: number;
}

export interface RoomData extends RoomDimensions {
  id: string;
  x: number;
  y: number;
  label: string;
}

/**
 * Creates a new room object with default or specified dimensions.
 * Core engine logic for room initialization.
 */
export const createRoom = (
  id: string,
  dimensions: RoomDimensions,
  position: { x: number; y: number },
  label: string = 'New Room'
): RoomData => {
  return {
    id,
    ...dimensions,
    ...position,
    label,
  };
};
