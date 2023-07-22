import React, { useRef, useEffect } from 'react';

const Clock = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx, time) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear canvas before drawing

    // Draw clock elements here (e.g., clock hands, numbers, etc.)
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8; // Adjust the radius as needed

    // Draw clock background
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw clock hands
    const date = new Date(time);
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourAngle = ((hours + minutes / 60) / 12) * 2 * Math.PI;
    const minuteAngle = (minutes / 60) * 2 * Math.PI;
    const secondAngle = (seconds / 60) * 2 * Math.PI;

    // Draw hour hand
    drawHand(ctx, centerX, centerY, hourAngle, radius * 0.5, 5, '#00ff00');

    // Draw minute hand
    drawHand(ctx, centerX, centerY, minuteAngle, radius * 0.7, 3, '#00ff00');

    // Draw second hand
    drawHand(ctx, centerX, centerY, secondAngle, radius * 0.9, 1, '#00ff00');
  };

  const drawHand = (ctx, x, y, angle, length, width, color) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length * Math.cos(angle), y + length * Math.sin(angle));
    ctx.stroke();
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const animateClock = (time) => {
      draw(context, time);
      requestAnimationFrame(animateClock);
    };

    animateClock(Date.now());

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;

      // Clear the canvas and redraw the clock after resizing
      draw(context, Date.now());
    };

    resizeCanvas();
    // Add event listeners for both initial setup and resizing
    window.addEventListener('resize', resizeCanvas);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Clock;
