const ufo = document.getElementById('ufo');
const ufoShadow = document.getElementById('ufo-shadow');
const contactIframe = document.getElementById('contact-iframe');

let ufoClick = 0;

// 定义动画控制变量，修复未定义错误
let ufoAnimation1Running = false;
let ufoAnimation2Running = false;

var ufoTop = ufo.offsetTop;
var ufoLeft = ufo.offsetLeft;
var ufoInitialTop = ufo.offsetTop;
var ufoInitialLeft = ufo.offsetLeft;

// 添加更新UFO位置函数
function updateUfoPosition() {
    // 使用百分比计算
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    
    // 使用CSS中定义的百分比位置 (89%, 85%)
    // 注意：因为UFO本身已经有transform: translate(-50%, -50%)，所以这里直接使用百分比即可
    ufo.style.top = '89%';
    ufo.style.left = '85%';
    
    // 同时更新当前值，以便动画使用
    ufoTop = ufo.getBoundingClientRect().top;
    ufoLeft = ufo.getBoundingClientRect().left;
    ufoInitialTop = ufoTop;
    ufoInitialLeft = ufoLeft;
    
    // 确保影子位置也正确
    ufoShadow.style.top = 'calc(89% + 3px)';
    ufoShadow.style.left = '85%';
    
    // 确保正确的transform属性
    ufo.style.transform = 'translate(-50%, -50%)';
}

// 添加窗口大小变化事件监听，更新初始位置
window.addEventListener('resize', function() {
    // 只在非动画状态更新位置
    if (!ufoAnimation1Running && !ufoAnimation2Running) {
        updateUfoPosition();
    }
});

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

    // 获取当前位置并保存
    ufoTop = parseFloat(ufo.offsetTop);
    ufoLeft = parseFloat(ufo.offsetLeft);
    
    // 直接开始上升动画
    ufo.style.transition = 'top 0.25s';
    ufoShadow.style.opacity = 0.6;
    ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(0.7) scaleX(1.4)';
    
    // 向上移动30px
    ufo.style.top = (ufoTop - 30) + 'px';
    
    setTimeout(function() {
        // 回到原始位置
        ufo.style.top = ufoTop + 'px';
        ufoShadow.style.opacity = 0;
        ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(0.0) scaleX(0.0)';
        
        setTimeout(function() {
            ufoAnimation1Running = false;
            ufo.style.transition = '';
        }, 300);   
    }, 600);
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

    // 获取当前位置并保存
    ufoTop = parseFloat(ufo.offsetTop);
    ufoLeft = parseFloat(ufo.offsetLeft);
    
    // 直接开始上升动画
    ufo.style.transition = 'top 0.25s';
    ufoShadow.style.opacity = 0.6;
    ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(1.5) scaleX(3)';
    
    // 向上移动80px
    ufo.style.top = (ufoTop - 80) + 'px';
    
    setTimeout(function() {
        // 回到原始位置
        ufo.style.top = ufoTop + 'px';
        ufoShadow.style.opacity = 0;
        ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(0.0) scaleX(0.0)';
        
        setTimeout(function() {
            ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(1)';
            // 调用位置更新函数，而不是使用固定值
            updateUfoPosition();
            ufoAnimation2Running = false;
            ufo.style.transition = '';
        }, 300);   
    }, 800);
}

function ufoAnimation3() {
    let step = 0;
    let ufoAnimation3Running = true;
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

    // 获取当前位置并保存
    ufoTop = parseFloat(ufo.offsetTop);
    ufoLeft = parseFloat(ufo.offsetLeft);
    
    // 直接开始上升动画
    ufo.style.transition = 'top 0.25s';
    ufoShadow.style.opacity = 0.6;
    ufoShadow.style.transform = 'translate(-50%, -50%) scaleY(1.5) scaleX(3)';
    
    // 向上移动80px
    ufo.style.top = (ufoTop - 80) + 'px';
    
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
                
                contactIframe.style.width = '100%';
                contactIframe.style.height = '100%';
                contactIframe.style.transition = 'all 0.01s ease-in-out';
                
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
                    ufo.style.display = 'block';
                    ufo.style.transform = 'translate(-50%, -50%) rotate(0deg) scale(1)';
                    // 调用位置更新函数，而不是使用固定值
                    updateUfoPosition();
                    ufo.style.transition = '';
                    ufoAnimation3Running = false;
                }, 100);
            }, 80); 
        }, 400);    
    }, 800);
}

// 确保页面加载后UFO位置正确初始化
document.addEventListener('DOMContentLoaded', function() {
    // 延迟一点以确保DOM完全加载
    setTimeout(function() {
        // 初始化UFO位置
        updateUfoPosition();
        console.log('UFO初始化完成:', ufoInitialTop, ufoInitialLeft);
    }, 200);
});

// 确保页面加载后UFO位置正确初始化
window.addEventListener('load', function() {
    // 再次确保位置正确
    updateUfoPosition();
});

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

    // 确保UFO和影子是可见的
    ufo.style.display = 'block';
    ufoShadow.style.display = 'block';

    // 获取当前UFO位置，确保操作前有效
    if (!ufoInitialTop || !ufoInitialLeft || isNaN(ufoInitialTop) || isNaN(ufoInitialLeft)) {
        ufoInitialTop = ufo.offsetTop || window.innerHeight * 0.89;
        ufoInitialLeft = ufo.offsetLeft || window.innerWidth * 0.85;
        ufoTop = ufoInitialTop;
        ufoLeft = ufoInitialLeft;
    }

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
    && !ufoAnimation1Running
    && !ufoAnimation2Running) {
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
            // 横向自适应
            if (currentWork.icon.position[0] >= 50) {
                descriptionBox.style.left = '32px';
                descriptionBox.style.right = 'auto';
            } else {
                descriptionBox.style.right = '32px';
                descriptionBox.style.left = 'auto';
            }
            // 纵向自适应
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
            descriptionBox.innerHTML = `
                <p>${work.title} <br><br></p>
                <p>${work.description}</p>
            `;
            // 横向自适应
            if (work.icon.position[0] >= 50) {
                descriptionBox.style.left = '32px';
                descriptionBox.style.right = 'auto';
            } else {
                descriptionBox.style.right = '32px';
                descriptionBox.style.left = 'auto';
            }
            // 纵向自适应
            if (work.icon.position[1] >= 50) {
                descriptionBox.style.bottom = 'calc(50% + 32px)';
                descriptionBox.style.top = 'auto';
            } else {
                descriptionBox.style.top = 'calc(50% - 4px)';
                descriptionBox.style.bottom = 'auto';
            }
            descriptionBox.style.display = 'block';
        });

        // 重新绑定点击事件，兼容移动端
        newWrapper.addEventListener('click', function(e) {
            const workId = this.getAttribute('data-work-id');
            window.location.href = `template.html?work=${workId}&from=map`;
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


