var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function setupCanvas() {
  resizeCanvas();

  window.addEventListener('resize', resizeCanvas);

  drawCanvas();
}

function drawCanvas() {
  clearCanvas();

  if (true) {
    var padfactor = 1e3;
    var e = 3e4;
    for (; e--; ) {
      var x = random(canvas.width);
      var y = random(canvas.height);
      ctx.save();
      ctx.lineWidth = 0.02;
      ctx.strokeStyle = "hsl(100, 0%, " + random(60, 95) + "%)";
      ctx.beginPath();
      ctx.moveTo(random(-padfactor, canvas.width + padfactor), random(-padfactor, canvas.height + padfactor));
      ctx.bezierCurveTo(
        random(-padfactor, canvas.width + padfactor),
        random(-padfactor, canvas.height + padfactor),
        random(-padfactor, canvas.width + padfactor),
        random(-padfactor, canvas.height + padfactor),
        random(-padfactor, canvas.width + padfactor),
        random(-padfactor, canvas.height + padfactor)
      );
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCanvas();
}

setupCanvas();