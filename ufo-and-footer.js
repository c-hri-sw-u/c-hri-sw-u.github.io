
const ufo = document.getElementById('ufo');
const ufoShadow = document.getElementById('ufo-shadow');
const contactIframe = document.getElementById('contact-iframe');

let ufoClick = 0;

var ufoTop = ufo.offsetTop;
var ufoLeft = ufo.offsetLeft;
var ufoInitialTop = ufo.offsetTop;
var ufoInitialLeft = ufo.offsetLeft;

function ufoAnimation1() {
    let step = 0;
    ufoAnimation1Running = true;
    let intervalId = setInterval(() => {

        // Alternate shake and rotate
        if (step % 2 === 0) {
            ufo.style.transform = 'translate(-50%, -50%) rotate(3deg)';
        } else {
            ufo.style.transform = 'translate(-50%, -50%) rotate(-10deg)';
        }
        step++;

        // Stop the animation after 3 seconds
        if (step >= 10) { // Adjust the number of steps for desired duration
            clearInterval(intervalId);
            ufo.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        }
    }, 100); // Adjust the delay between steps for desired animation speed

    ufo.style.top += 30;
    
    setTimeout(function() {
        ufo.style.transition = 'top 0.2s';
        ufoShadow.style.opacity = 0.6;
        ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(0.7) scaleX(1.4)';    
        ufoTop += -30;
        ufo.style.top = ufoTop + 'px';
        
        setTimeout(function() {
            ufoTop += 30;
            ufo.style.top = ufoTop + 'px';
            ufoShadow.style.opacity = 1;
            ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(0.0) scaleX(0.0)';
            
            ufoAnimation1Running = false;
        }, 600);   
    }, 300);
    ufoTop = ufo.offsetTop;
    ufoLeft = ufo.offsetLeft;
}

function ufoAnimation2() {
    let step = 0;
    ufoAnimation2Running = true;
    let intervalId = setInterval(() => {

        // Alternate shake and rotate
        if (step % 2 === 0) {
            ufo.style.transform = 'translate(-50%, -50%) rotate(3deg)';
        } else {
            ufo.style.transform = 'translate(-50%, -50%) rotate(-10deg)';
        }
        step++;

        // Stop the animation after 3 seconds
        if (step >= 12) { // Adjust the number of steps for desired duration
            clearInterval(intervalId);
            ufo.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        }
    }, 100); // Adjust the delay between steps for desired animation speed

    ufo.style.top += 80;
    
    setTimeout(function() {
        ufo.style.transition = 'top 0.2s';
        ufoShadow.style.opacity = 0.6;
        ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(1.5) scaleX(3)';
        ufoTop += -80;
        ufo.style.top = ufoTop + 'px';
        
        setTimeout(function() {
            ufoTop += 80;
            ufo.style.top = ufoTop + 'px';
            ufoShadow.style.opacity = 1;
            ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(0.0) scaleX(0.0)';
            setTimeout(function() {
                ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(1)';
                ufo.style.top = ufoInitialTop + 'px';
                ufo.style.left = ufoInitialLeft + 'px';
                ufoAnimation2Running = false;
            }, 10);
        }, 800);   
    }, 400);
    ufoTop = ufo.offsetTop;
    ufoLeft = ufo.offsetLeft;
}

function ufoAnimation3() {
    let step = 0;
    // ufoAnimation3Running = true;
    let intervalId = setInterval(() => {

        // Alternate shake and rotate
        if (step % 2 === 0) {
            ufo.style.transform = 'translate(-50%, -50%) rotate(3deg)';
        } else {
            ufo.style.transform = 'translate(-50%, -50%) rotate(-10deg)';
        }
        step++;

        // Stop the animation after 3 seconds
        if (step >= 16) { // Adjust the number of steps for desired duration
            clearInterval(intervalId);
            ufo.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        }
    }, 100); // Adjust the delay between steps for desired animation speed

    ufo.style.top += 80;
    
    setTimeout(function() {
        ufo.style.transition = 'top 0.2s';
        ufoShadow.style.opacity = 0.6;
        ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(1.5) scaleX(3)';
        ufoTop += -80;
        ufo.style.top = ufoTop + 'px';
        
        setTimeout(function() {
            ufo.style.transition = 'all 0.5s ease-in-out';
            ufoTop = 0.4 * window.innerHeight;
            ufoLeft = 0.6 * window.innerWidth;
            ufo.style.top = ufoTop + 'px';
            ufo.style.left = ufoLeft + 'px';
            ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(2)';

            ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(0.0) scaleX(0.0)';
            setTimeout(function() {
                ufo.style.transition = 'all 0.1s ease-in-out';
                ufoTop = 0.6 * window.innerHeight;
                ufoLeft = 0.4 * window.innerWidth;
                ufo.style.top = ufoTop + 'px';
                ufo.style.left = ufoLeft + 'px';
                ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(4)';
                setTimeout(function() {
                    ufo.style.transition = 'all 0.2s ease-in-out';
                    ufoTop = 0.5 * window.innerHeight;
                    ufoLeft = 0.5 * window.innerWidth;
                    ufo.style.top = ufoTop + 'px';
                    ufo.style.left = ufoLeft + 'px';
                    ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(200)';
                    
                    // contactIframe.style.display = 'block';
                    contactIframe.style.width = '100%';
                    contactIframe.style.height = '100%';
                    // contactIframe.style.opacity = '80%';
                    contactIframe.style.transition = 'all 0.01s ease-in-out';
                    setTimeout(function() {
                        ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(1)';
                        ufo.style.top = ufoInitialTop + 'px';
                        ufo.style.left = ufoInitialLeft + 'px';
                        // ufoAnimation3Running = false;
                    }, 100);
                }, 80); 
            }, 400);    
        }, 800);   
    }, 400);
    ufoTop = ufo.offsetTop;
    ufoLeft = ufo.offsetLeft;
}


// ufo simply click/shiftleft

document.addEventListener("keydown", function(event) {
    if (event.code === "ShiftLeft") {
        ufoAnimation1();
    }
}); 

ufo.addEventListener('click', function(event) {
    ufoAnimation1();
});



// ufo different situations

const contactButton = document.getElementById('contact');

contactButton.addEventListener('click', function(event) {
    if (ufoClick === 0) {
        ufoClick++;
        ufoAnimation1();
        contactIframe.src = 'contact.html';
    } else if (ufoClick === 1) {
        ufoClick++;
        ufoAnimation2();
        contactIframe.src = 'contact.html';
    } else if (contactIframe.style.display === 'none' 
    && overlayIframe.style.display === 'none' 
    && ufo.style.top === ufoInitialTop + 'px'
    && ufoAnimation1Running === false
    && ufoAnimation2Running === false) {
        contactIframe.style.display = 'block';
        ufoAnimation3();
    } else {
        ufoAnimation2();
    }
});



// block animation

function animateShadows(blackBlocks) {
    let appearIndex = 0;
    let disappearIndex = 0;
    const interval = 16; // Adjust the interval for desired animation speed
    const transitionDuration = blackBlocks.length / 100; // Adjust the transition duration
  
    const animateAppear = () => {
      if (appearIndex < blackBlocks.length) {
        blackBlocks[appearIndex].style.transition = `all ${transitionDuration}s ease-in-out`;
        blackBlocks[appearIndex].style.boxShadow = '0px 0px 16px 0px rgba(0, 0, 0, 0.2)';
        setTimeout(() => {
          appearIndex++;
          if (appearIndex === Math.floor(blackBlocks.length)) {
            animateDisappear();
          } else {
            animateAppear();
          }
        }, interval);
      }
    };
  
    const animateDisappear = () => {
      if (disappearIndex < Math.floor(blackBlocks.length)) {
        blackBlocks[disappearIndex].style.transition = `all ${transitionDuration}s ease-in-out`;
        blackBlocks[disappearIndex].style.boxShadow = 'none';
        setTimeout(() => {
          disappearIndex++;
          animateDisappear();
        }, interval);
      }
    };
  
    animateAppear();
}


function hideOverlay() {
    overlay.style.height = '0';
    overlay.style.top = '100%';
    opacityArea.style.height = '0';
    opacityArea.style.top = '100%';
    setTimeout(function() {
        overlayIframe.style.display = 'none';
    }, 500);
}

// fullMapButton
const fullMapButton = document.getElementById('fullmap');

fullMapButton.addEventListener('click', function(event) {
    console.log('fullMapButton clicked');

    hideOverlay();
    console.log('overlayIframe.style.display', overlayIframe.style.display);
    

    contactIframe.style.height = '0';
    contactIframe.style.transition = 'all 0.2s ease-in-out';
    setTimeout(function() {
        contactIframe.style.display = 'none';
    }, 200);

    if (contactIframe.style.display === 'none' && overlayIframe.style.display === 'none'  ) {
        const blackBlocks = document.getElementsByClassName('grass-block-black');
        animateShadows(blackBlocks);
    }
});



// // playgroundButton

// const playgroundButton = document.getElementById('playground');

// playgroundButton.addEventListener('click', function(event) {
//     window.open("playground.html", "_blank"); 
// });
