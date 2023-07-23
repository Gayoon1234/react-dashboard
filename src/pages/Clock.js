import React, { useRef, useEffect } from "react";

const Clock = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx, time) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear canvas before drawing
    // Draw clock hands
    const date = new Date(Date.now());
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // 6 rows, 24 columns

    // one 7 seg:
    const rows = 6;
    const cols = 24;
    const w = ctx.canvas.width / cols;
    const h = ctx.canvas.height / rows;

    ctx.lineWidth = 1;
    ctx.strokeStyle = "#00ff00";
    ctx.fillStyle = "#00ff00";

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * w;
        const y = row * h;
        // ctx.strokeRect(x, y, w, h);
        drawHorizontalSegment(ctx, x, y, h, w);
        drawHorizontalSegment(ctx, x, 0.4 * h + y, h, w);
        drawHorizontalSegment(ctx, x, 0.8 * h + y, h, w);

        drawVerticalSegment(ctx, x, y, h, w);
        drawVerticalSegment(ctx, x + 0.1 * h + 0.43 * w, y, h, w);

        drawVerticalSegment(ctx, x, 0.4 * h + y, h, w);
        drawVerticalSegment(ctx, x + 0.1 * h + 0.43 * w, 0.4 * h + y, h, w);
      }
    }
  };

  //can put const here...
  const drawHorizontalSegment = (ctx, x, y, h, w) => {
    ctx.fillRect(x + 0.3 * w, y + 0.05 * h, 0.4 * w, 0.1 * h);

    //left triangle
    ctx.beginPath();
    ctx.moveTo(x + 0.31 * w, y + 0.05 * h);
    ctx.lineTo(x + 0.24 * w, y + 0.1 * h);
    ctx.lineTo(x + 0.31 * w, y + 0.15 * h);
    ctx.closePath();
    ctx.fill();

    //right triangle
    ctx.beginPath();
    ctx.moveTo(x + 0.69 * w, y + 0.05 * h);
    ctx.lineTo(x + 0.76 * w, y + 0.1 * h);
    ctx.lineTo(x + 0.69 * w, y + 0.15 * h);
    ctx.closePath();
    ctx.fill();
  };

  const drawVerticalSegment = (ctx, x, y, h, w) => {
    ctx.fillRect(
      x + 0.285 * w - 0.1 * h,
      y + 0.15 * h + 0.015 * w,
      0.1 * h,
      0.4 * w
    );

    ctx.beginPath();
    //top
    ctx.moveTo(x + 0.285 * w - 0.05 * h, y + 0.15 * h - 0.045 * w);
    //bot right
    ctx.lineTo(x + 0.285 * w, y + 0.15 * h + 0.015 * w);
    //bot left
    ctx.lineTo(x + 0.285 * w - 0.1 * h, y + 0.15 * h + 0.015 * w);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    //bot
    ctx.moveTo(x + 0.285 * w - 0.05 * h, y + 0.15 * h + 0.475 * w);
    //top right
    ctx.lineTo(x + 0.285 * w, y + 0.15 * h + 0.415 * w);
    //top left
    ctx.lineTo(x + 0.285 * w - 0.1 * h, y + 0.15 * h + 0.415 * w);
    ctx.closePath();
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const animateClock = (time) => {
      draw(context, time);
      requestAnimationFrame(animateClock);
    };

    animateClock(Date.now());

    const resizeCanvas = () => {
      canvas.width = 0.9 * canvas.parentElement.clientWidth;
      canvas.height = 0.9 * canvas.parentElement.clientHeight;

      // Clear the canvas and redraw the clock after resizing
      draw(context, Date.now());
    };

    resizeCanvas();
    // Add event listeners for both initial setup and resizing
    window.addEventListener("resize", resizeCanvas);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Clock;
