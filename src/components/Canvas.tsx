import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvas = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      fabricCanvas.current = new fabric.Canvas(canvasRef.current, {
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.8,
        backgroundColor: '#f8fafc',
      });

      // Cleanup on unmount
      return () => {
        fabricCanvas.current?.dispose();
      };
    }
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-200 p-4">
      <div className="shadow-xl border border-gray-300">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};
