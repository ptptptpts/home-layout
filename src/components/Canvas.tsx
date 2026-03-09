import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      fabricRef.current = new fabric.Canvas(canvasRef.current, {
        width: 800,
        height: 600,
        backgroundColor: '#f0f0f0',
      });
    }

    return () => {
      fabricRef.current?.dispose();
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg">
      <canvas ref={canvasRef} className="border border-gray-400 shadow-lg" />
    </div>
  );
};
