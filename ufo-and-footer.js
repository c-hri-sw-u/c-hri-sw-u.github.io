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
                    // Add strikethrough to Filter and Contact text
                    const filterText = document.querySelector('#filter .eng');
                    const contactText = document.querySelector('#contact .eng');
                    if (filterText) {
                        filterText.style.textDecoration = 'line-through';
                        filterText.style.textDecorationThickness = '2px';
                        filterText.parentElement.style.opacity = '0.25';
                        filterText.parentElement.style.pointerEvents = 'none';
                    }
                    if (contactText) {
                        contactText.style.textDecoration = 'line-through';
                        contactText.style.textDecorationThickness = '2px';
                        contactText.parentElement.style.opacity = '0.25';
                        contactText.parentElement.style.pointerEvents = 'none';
                    }
                    setTimeout(function() {
                        ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(1)';
                        ufo.style.top = ufoInitialTop + 'px';
                        ufo.style.left = ufoInitialLeft + 'px';
                        // Remove the strikethrough removal code here since we want it to persist
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

function hideFilterContainer() {
    const filterContainer = document.getElementById('filter-container');
    filterContainer.style.display = 'none';
    if (typeof selectAllTags === 'function') selectAllTags();
}

contactButton.addEventListener('click', function(event) {
    // Stop auto-play if it's running
    if (isAutoPlaying) {
        console.log('Stopping auto-play due to contact button click');
        stopAutoPlayShowcase();
    }

    // Hide filter container and reset to select all
    hideFilterContainer();

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

let autoPlayInterval = null;
let currentShowcaseIndex = 0;
let isAutoPlaying = false;
let currentTimeout = null;

function cleanupAutoPlay() {
    // Clear any existing timeouts
    if (currentTimeout) {
        clearTimeout(currentTimeout);
        currentTimeout = null;
    }
    
    isAutoPlaying = false;
    currentShowcaseIndex = 0;
    
    // Reset all icons
    const iconWrappers = document.querySelectorAll('.icon-wrapper');
    iconWrappers.forEach(wrapper => {
        wrapper.style.transform = 'translate(-50%, -50%) scale(1)';
        wrapper.style.zIndex = '3';
        const hoverContent = wrapper.querySelector('.hover-content');
        if (hoverContent) {
            hoverContent.style.display = 'none';
        }
    });
    
    // Hide description
    const descriptionBox = document.querySelector('.hover-description');
    if (descriptionBox) {
        descriptionBox.style.display = 'none';
    }
}

function startAutoPlayShowcase() {
    console.log('Starting auto-play showcase');
    
    // Always cleanup first
    cleanupAutoPlay();
    
    // Small delay to ensure cleanup is complete
    setTimeout(() => {
        isAutoPlaying = true;
        const works = getAllWorksWithIcons();
        const iconWrappers = document.querySelectorAll('.icon-wrapper');
        
        function showNextIcon() {
            // Clear any existing timeouts
            if (currentTimeout) {
                clearTimeout(currentTimeout);
                currentTimeout = null;
            }
            
            console.log('showNextIcon called, currentShowcaseIndex:', currentShowcaseIndex);
            
            // Stop if no more icons
            if (currentShowcaseIndex >= works.length) {
                console.log('Resetting to first icon');
                currentShowcaseIndex = 0;
            }

            const currentWork = works[currentShowcaseIndex];
            const currentWrapper = iconWrappers[currentShowcaseIndex];

            console.log('Auto-play showing icon:', currentWork.id);

            // Reset all icons first
            iconWrappers.forEach(wrapper => {
                wrapper.style.transform = 'translate(-50%, -50%) scale(1)';
                wrapper.style.zIndex = '3';
                const hoverContent = wrapper.querySelector('.hover-content');
                if (hoverContent) {
                    hoverContent.style.display = 'none';
                }
            });

            // Scale up the current icon
            currentWrapper.style.transform = 'translate(-50%, -50%) scale(1.2)';
            currentWrapper.style.zIndex = '9999';

            // Show hover content
            const hoverContent = currentWrapper.querySelector('.hover-content');
            if (hoverContent) {
                console.log('Showing hover content for:', currentWork.id);
                hoverContent.style.display = 'block';
                if (currentWork.icon.position[1] >= 50) {
                    hoverContent.style.bottom = '100%';
                    hoverContent.style.top = 'auto';
                } else {
                    hoverContent.style.top = '100%';
                    hoverContent.style.bottom = 'auto';
                }
            }

            // Show description
            const descriptionBox = document.querySelector('.hover-description');
            descriptionBox.innerHTML = `
                <p>${currentWork.title} <br><br></p>
                <p>${currentWork.description}</p>
            `;
            if (currentWork.icon.position[1] >= 50) {
                descriptionBox.style.bottom = 'calc(50% + 32px)';
                descriptionBox.style.top = 'auto';
            } else {
                descriptionBox.style.top = 'calc(50% - 4px)';
                descriptionBox.style.bottom = 'auto';
            }
            descriptionBox.style.display = 'block';

            // After 3 seconds, move to next icon
            if (isAutoPlaying) {
                currentTimeout = setTimeout(() => {
                    console.log('Moving to next icon');
                    currentShowcaseIndex++;
                    showNextIcon();
                }, 3000);
            }
        }

        // Start the showcase
        showNextIcon();
    }, 100);
}

function stopAutoPlayShowcase() {
    console.log('Stopping auto-play showcase');
    cleanupAutoPlay();
    
    // Re-add hover listeners after stopping auto-play
    setTimeout(() => {
        addHoverListeners();
    }, 100);
}

fullMapButton.addEventListener('click', function(event) {
    console.log('fullMapButton clicked');

    hideOverlay();
    
    // Hide filter container and reset to select all
    hideFilterContainer();
    
    // Remove strikethrough from Filter and Contact text
    const filterText = document.querySelector('#filter .eng');
    const contactText = document.querySelector('#contact .eng');
    if (filterText) {
        filterText.style.textDecoration = 'none';
        filterText.style.textDecorationThickness = '1px';
        filterText.parentElement.style.opacity = '1';
        filterText.parentElement.style.pointerEvents = 'auto';
    }
    if (contactText) {
        contactText.style.textDecoration = 'none';
        contactText.style.textDecorationThickness = '1px';
        contactText.parentElement.style.opacity = '1';
        contactText.parentElement.style.pointerEvents = 'auto';
    }

    contactIframe.style.height = '0';
    contactIframe.style.transition = 'all 0.2s ease-in-out';
    setTimeout(function() {
        contactIframe.style.display = 'none';
    }, 200);

    if (contactIframe.style.display === 'none' && overlayIframe.style.display === 'none') {
        startAutoPlayShowcase();
    }
});

// Add global mouseover event listener to stop auto-play
document.addEventListener('mouseover', function(e) {
    const iconWrapper = e.target.closest('.icon-wrapper');
    if (iconWrapper && isAutoPlaying) {
        console.log('Global mouseover detected on icon:', iconWrapper.getAttribute('data-work-id'));
        stopAutoPlayShowcase();
    }
});

// Modify the addHoverListeners function to handle hover effects more directly
function addHoverListeners() {
    console.log('Adding hover listeners');
    const works = getAllWorksWithIcons();
    const iconWrappers = document.querySelectorAll('.icon-wrapper');
    
    iconWrappers.forEach(wrapper => {
        // Remove existing listeners first
        const newWrapper = wrapper.cloneNode(true);
        
        // Preserve the canvas content
        const oldCanvas = wrapper.querySelector('canvas');
        const newCanvas = newWrapper.querySelector('canvas');
        if (oldCanvas && newCanvas) {
            const context = newCanvas.getContext('2d');
            context.drawImage(oldCanvas, 0, 0);
        }
        
        wrapper.parentNode.replaceChild(newWrapper, wrapper);
        
        newWrapper.addEventListener('mouseover', function(e) {
            const workId = this.getAttribute('data-work-id');
            console.log('Mouse over icon wrapper:', workId);
            
            // Reset all other icons first
            iconWrappers.forEach(otherWrapper => {
                if (otherWrapper !== this) {
                    otherWrapper.style.transform = 'translate(-50%, -50%) scale(1)';
                    otherWrapper.style.zIndex = '3';
                    const otherHoverContent = otherWrapper.querySelector('.hover-content');
                    if (otherHoverContent) {
                        otherHoverContent.style.display = 'none';
                    }
                }
            });
            
            // Apply hover effect
            this.style.transform = 'translate(-50%, -50%) scale(1.2)';
            this.style.zIndex = '9999';
            
            // Show hover content
            const hoverContent = this.querySelector('.hover-content');
            if (hoverContent) {
                hoverContent.style.display = 'block';
                const work = works.find(w => w.id === workId);
                if (work && work.icon.position[1] >= 50) {
                    hoverContent.style.bottom = '100%';
                    hoverContent.style.top = 'auto';
                } else {
                    hoverContent.style.top = '100%';
                    hoverContent.style.bottom = 'auto';
                }
            }

            // Show description
            const descriptionBox = document.querySelector('.hover-description');
            const work = works.find(w => w.id === workId);
            if (work) {
                descriptionBox.innerHTML = `
                    <p>${work.title} <br><br></p>
                    <p>${work.description}</p>
                `;
                if (work.icon.position[1] >= 50) {
                    descriptionBox.style.bottom = 'calc(50% + 32px)';
                    descriptionBox.style.top = 'auto';
                } else {
                    descriptionBox.style.top = 'calc(50% - 4px)';
                    descriptionBox.style.bottom = 'auto';
                }
                descriptionBox.style.display = 'block';
            }
        });

        newWrapper.addEventListener('mouseleave', function(e) {
            const workId = this.getAttribute('data-work-id');
            console.log('Mouse leave icon wrapper:', workId);
            
            if (!isAutoPlaying) {
                this.style.transform = 'translate(-50%, -50%) scale(1)';
                this.style.zIndex = '3';
                
                const hoverContent = this.querySelector('.hover-content');
                if (hoverContent) {
                    hoverContent.style.display = 'none';
                }

                const descriptionBox = document.querySelector('.hover-description');
                descriptionBox.style.display = 'none';
            }
        });
    });
}

// filterButton
const filterButton = document.getElementById('filter');

filterButton.addEventListener('click', function(event) {
    console.log('filterButton clicked');
    
    // Stop auto-play if it's running
    if (isAutoPlaying) {
        console.log('Stopping auto-play due to filter button click');
        stopAutoPlayShowcase();
    }
    
    // Check if we're on the main page (contact and overlay are hidden)
    if (contactIframe.style.display === 'none' && overlayIframe.style.display === 'none') {
        const filterContainer = document.getElementById('filter-container');
        if (filterContainer.style.display === 'none' || filterContainer.style.display === '') {
            filterContainer.style.display = 'flex';
        } else {
            hideFilterContainer();
        }
    }
});

// Add X button click handler
const xButton = document.getElementById('filter-line4-item3');
xButton.addEventListener('click', function(event) {
    hideFilterContainer();
});


