const dialogue1 = document.getElementById("dialogue1");
const dialogue2 = document.getElementById("dialogue2");
const dialogue3 = document.getElementById("dialogue3");
const dialogue4 = document.getElementById("dialogue4");
const dialogue5 = document.getElementById("dialogue5");
const dialogue6 = document.getElementById("dialogue6");

var dialogues = [dialogue4, dialogue5, dialogue6];

// the animation
const kiwiContainer = document.getElementById("kiwi-container");
var kiwiContainerLeft = kiwiContainer.offsetLeft;
var kiwiContainerTop = kiwiContainer.offsetTop;


const kiwi = document.getElementById("kiwi");
const kiwiStand = document.getElementById("kiwi-stand");
const kiwiBody = document.getElementById("kiwi-body");
const kiwiLegs1 = document.getElementById("kiwi-legs1");
const kiwiLegs2 = document.getElementById("kiwi-legs2");

const minLeft = window.innerWidth * 0.02;
const maxLeft = window.innerWidth * 0.46;
const minTop = window.innerHeight * 0.02;
const maxTop = window.innerHeight * 0.46;

function kiwiContainerMove(direction1, direction2) {
    // Check and adjust boundaries
    if (kiwiContainerLeft < minLeft) {
        direction1 = 1;
    } else if (kiwiContainerLeft > maxLeft) {
        direction1 = -1;
    }

    if (kiwiContainerTop < minTop) {
        direction2 = 1;
    } else if (kiwiContainerTop > maxTop) {
        direction2 = -1;
    }

    kiwiContainerLeft += direction1 * 0.004 * window.innerWidth; // Adjust the value for desired movement distance
    kiwiContainerTop += direction2 * 0.004 * window.innerWidth;

    // Flip kiwiSvg based on direction
    if (direction1 < 0) {
        kiwi.style.transform = "scale(0.85) scaleX(-1)";
    } else {
        kiwi.style.transform = "scale(0.85) scaleX(1)";
    }
    
    kiwiContainer.style.left = kiwiContainerLeft + "px";
    kiwiContainer.style.top = kiwiContainerTop + "px";

    return [direction1, direction2]; // Return updated directions for next iteration
}

function startWaddleAnimation() {
    let step = 0;
    kiwiStand.style.opacity = 0;
    kiwiBody.style.opacity = 1;
    var randomDirection1 = Math.sign(Math.random() * 2 - 1);
    var randomDirection2 = Math.sign(Math.random() * 2 - 1);
    var lastDirection1 = 0;
    var lastDirection2 = 0;

    let intervalId = setInterval(() => {
        // Move kiwi container
        [randomDirection1, randomDirection2] = kiwiContainerMove(
            randomDirection1,
            randomDirection2,
            lastDirection1,
            lastDirection2
        );

        // Alternate kiwi legs
        if (step % 2 === 0) {
            kiwiLegs1.style.opacity = 1;
            kiwiLegs2.style.opacity = 0;
        } else {
            kiwiLegs1.style.opacity = 0;
            kiwiLegs2.style.opacity = 1;
        }
        step++;

        // Stop the animation after 3 seconds
        if (step >= 6) { // Adjust the number of steps for desired duration
            clearInterval(intervalId);
            kiwiStand.style.opacity = 1;
            kiwiBody.style.opacity = 0;
            kiwiLegs1.style.opacity = 0;
            kiwiLegs2.style.opacity = 0;
        }

        // Update last directions for next iteration
        lastDirection1 = randomDirection1;
        lastDirection2 = randomDirection2;
    }, 100); // Adjust the delay between steps for desired animation speed
}

// document.addEventListener("keydown", function(event) {
//     if (event.code === "Space") {
//         startWaddleAnimation();
//     }
// });  

// click function
var timer = 0;
let isClicking = false;
kiwi.addEventListener("click", function() {
    // Start the waddle animation
    startWaddleAnimation();
    setTimeout(() => {
        if (!isClicking && !dialogues.some(dialogue => dialogue.style.opacity === 1)) {
            isClicking = true;
            dialogues[timer].style.display = "block";
            setTimeout(() => {
            dialogues[timer].style.display = "none";
            if (timer < dialogues.length - 1) {
                timer++;
            } else {
                timer = 2;
            }
            isClicking = false;
            }, 4000);
        }
    }, 500); // Adjust the delay for desired animation delay
    
});

const aboutDropdown1 = document.getElementById("about-dropdown1");
const aboutDropdown2 = document.getElementById("about-dropdown2");
const aboutDropdown3 = document.getElementById("about-dropdown3");

function showDialogue(aboutDropdown, dialogue) {
    aboutDropdown.addEventListener("click", function() {
        // Start the waddle animation
        startWaddleAnimation();

        if (!isClicking && !dialogues.some(dialogue => dialogue.style.opacity === 1)) {
            isClicking = true;
            dialogue.style.display = "block";
            setTimeout(() => {
                dialogue.style.display = "none";
                isClicking = false;
            }, 4000);
        }
        
    });
}

showDialogue(aboutDropdown1, dialogue1);
showDialogue(aboutDropdown2, dialogue2);
showDialogue(aboutDropdown3, dialogue3);

