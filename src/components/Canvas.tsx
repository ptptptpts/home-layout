import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current && !fabricRef.current) {
      fabricRef.current = new fabric.Canvas(canvasRef.current, {
        width: 800,
        height: 600,
        backgroundColor: '#f0f0f0',
      });
    }

    return () => {
      fabricRef.current?.dispose();
      fabricRef.current = null;
    };
  }, []);

  return (
    <div className="border border-gray-300 shadow-lg">
      <canvas ref={canvasRef} />
    </div>
  );
};
