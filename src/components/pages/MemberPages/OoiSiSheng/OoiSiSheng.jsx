import React from "react";

function OoiSiSheng() {
  return <div>
    <h1 style={{ textAlign: "center" }}>Hello, I'm Sheng ~</h1>
    <h2 style={{ textAlign: "center", margin: "15px 0" }}>JavaScript is fun!</h2>
    <p style={{ textAlign: "center", marginBottom: "30px" }}>Let's play Tennis together!</p>
    <p style={{ textAlign: "center", marginBottom: "30px" }} className="removeText"><small>Refresh this page first...</small></p>
    <canvas id="gameCanvas" width="730" height="600"></canvas>
  </div>;
}

var canvas;
var canvasContext;

var ballX = 50;
var ballY = 50;
var ballSpeedX = 15;
var ballSpeedY = 5;

var deltaY;

var player1Score = 0;
var player2Score = 0;
const WINNING_SCORE = 3;

var showingStartScreen = true;
var showingWinScreen = false;

var paddle1Y = 250;
var paddle2Y = 250;

const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;

window.onload = function() {
  if(!(window.location.href.indexOf("ooisisheng") > -1)) {
    return;
  }

  document.querySelector('.removeText').remove();

  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  
  var framesPerSecond = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 1000/framesPerSecond);
  
  canvas.addEventListener('mousedown', handleMouseClick);
  
  canvas.addEventListener('mousemove', function(e) {
    var mousePos = calculateMousePos(e);
    paddle1Y = mousePos.y - PADDLE_HEIGHT/2;
  });
}

function computerMovement() {
  var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT / 2);
  
  if (paddle2YCenter < ballY - 35) {
    paddle2Y += 6;
  } else if (paddle2YCenter > ballY + 35) {
    paddle2Y -= 6;
  }
}

function moveEverything() {
  if (showingWinScreen || showingStartScreen) {
    return;
  }
  
  computerMovement();
  
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  
  if (ballX < 0) {
    if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
      ballSpeedX = -ballSpeedX;
      
      deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
      ballSpeedY = deltaY * 0.35;
    } else {
      player2Score++;
      ballReset();
    }
  }
  
  if (ballX > canvas.width) {
    if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
      ballSpeedX = -ballSpeedX;
      
      deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
      ballSpeedY = deltaY * 0.35;
    } else {
      player1Score++;
      ballReset();
    }
  }
  
  if (ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }
  
  if (ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }
}

function drawNet() {
  for (var i = 10; i < canvas.height; i += 40) {
    colorRect(canvas.width / 2 - 1, i, 2, 20, 'white');
  }
}

function drawEverything() {
  //Black background
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  
  canvasContext.fillStyle = 'white';
  canvasContext.font = "36px Arial";
  canvasContext.textAlign = "center";
  
  if (showingStartScreen) {
    canvasContext.fillText('Get 3 Points to Win!', canvas.width / 2, 250);
    canvasContext.font = "24px Arial";
    canvasContext.fillText('Click to Start.', canvas.width / 2, 500);
    return;
  }
  
  if (showingWinScreen) {
    if (player1Score >= WINNING_SCORE) {
      canvasContext.fillText('You Won!', canvas.width / 2, 250);
    } else if (player2Score >= WINNING_SCORE) {
      canvasContext.fillText('You Lost!', canvas.width / 2, 250);
    }
    
    canvasContext.font = "24px Arial";
    canvasContext.fillText('Click to Restart.', canvas.width / 2, 500);
    return;
  }
  
  drawNet();
  
  //Left player paddle
  colorRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
  
  //Right computer paddle
  colorRect(canvas.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');
  
  //Ball
  colorCircle(ballX, ballY, 10, 'white');
  
  canvasContext.font = "24px Arial";
  canvasContext.fillText(player1Score, 100, 100);
  canvasContext.fillText(player2Score, canvas.width - 100, 100);
}

function colorCircle(centerX, centerY, radius, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
  canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor) {
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}

function calculateMousePos(e) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = e.clientX - rect.left - root.scrollLeft;
  var mouseY = e.clientY - rect.top - root.scrollTop;
  
  return {
    x: mouseX,
    y: mouseY
  };
}

function ballReset() {
  if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
    showingWinScreen = true;
  }
  
  ballSpeedX = -ballSpeedX;
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
}

function handleMouseClick() {
  if (showingStartScreen) {
    showingStartScreen = false;
  }
  
  if (showingWinScreen) {
    player1Score = 0;
    player2Score = 0;
    showingWinScreen = false;
  }
}

export default OoiSiSheng;