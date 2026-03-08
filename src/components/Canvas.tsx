import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current && !fabricCanvasRef.current) {
      fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
        width: 800,
        height: 600,
        backgroundColor: '#f3f4f6',
      });
    }

    return () => {
      fabricCanvasRef.current?.dispose();
      fabricCanvasRef.current = null;
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg shadow-inner">
      <canvas ref={canvasRef} className="border border-gray-400" />
    </div>
  );
};
