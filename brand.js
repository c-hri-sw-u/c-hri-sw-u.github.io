const walking = document.getElementById("walking");
const ufoWhite = document.getElementById("ufo-white");
const ufoShadow = document.getElementById("ufo-shadow");
const ufoLight = document.getElementById("ufo-light");

function walkingFloat() {
  let rotationAngle = -40; // Initial rotation angle
  let isRotatingRight = true; // Flag to indicate rotation direction

  const rotationInterval = setInterval(() => {
    walking.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;

    if (isRotatingRight) {
      rotationAngle += 10;
      if (rotationAngle >= -30) {
        isRotatingRight = false;
      }
    } else {
      rotationAngle -= 10;
      if (rotationAngle <= -40) {
        isRotatingRight = true;
      }
    }
  }, 500); // Adjust the interval for desired rotation speed

  // Stop the rotation when the walking element is clicked again
  walking.addEventListener("click", () => {
    clearInterval(rotationInterval);
  });
}

// Call the walkingFloat function when the walking element is clicked
walking.addEventListener("click", function() {
  ufoWhite.style.display = "block";
  // ufoShadow.style.display = "block";
  ufoLight.style.display = "block";
  walkingFloat();
});

const fullMapButton = document.getElementById('fullmap');

ufoWhite.addEventListener("click", function(event) {
  contactIframe.style.height = '0';
  contactIframe.style.transition = 'all 0.2s ease-in-out';
  setTimeout(function() {
      contactIframe.style.display = 'none';
  }, 200);
});
