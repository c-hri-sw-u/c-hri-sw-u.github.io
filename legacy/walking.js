var walkingIconSrcs = [
    "./icon/walking/walking-default.svg",
    "./icon/walking/walking-1.svg",
    "./icon/walking/walking-2.svg",
    "./icon/walking/walking-3.svg",
    "./icon/walking/walking-4.svg",
    "./icon/walking/walking-5.svg",
    "./icon/walking/walking-6.svg",
    "./icon/walking/walking-7.svg",
    "./icon/walking/walking-8.svg",
    "./icon/walking/walking-9.svg"
]; 

const walkingContainer = document.getElementById("walking");
const infoSection = document.getElementById("info");

var walkingIndex = 0;
var walkingIcons = [];

// 创建walking图标
for (let i = 0; i < walkingIconSrcs.length; i++) {
    const icon = document.createElement("img");
    icon.src = walkingIconSrcs[i];
    icon.style.display = "none";
    icon.style.position = "absolute";
    icon.style.top = "0";
    icon.style.left = "0";
    icon.style.width = "100%";
    icon.style.height = "100%";
    
    walkingIcons.push(icon);
    walkingContainer.appendChild(icon);
}

function animateWalking2() {
    let lastScrollY = infoSection.scrollTop;
    let scrollSpeed = 0;
    let walkingIndex = 0;
    walkingIcons[walkingIndex].style.display = "block";

    infoSection.addEventListener("scroll", () => {
        const currentScrollY = infoSection.scrollTop;
        const newScrollSpeed = Math.abs(currentScrollY - lastScrollY);

        if (currentScrollY === 0 ||
            currentScrollY === infoSection.scrollHeight - infoSection.clientHeight) {
            scrollSpeed = 1;
        } else if (newScrollSpeed > 0) {
            scrollSpeed = newScrollSpeed;
        }

        lastScrollY = currentScrollY;
        const scaledScrollSpeed = scrollSpeed * 0.3;

        if (scaledScrollSpeed < 2) {
            return;
        } else if (scaledScrollSpeed < 8) {
            for (let i = 0; i < 2; i++) {
                walkingIcons[walkingIndex].style.display = "none";
                walkingIndex = (walkingIndex + 1) % walkingIconSrcs.length;
                walkingIcons[walkingIndex].style.display = "block";  
            }
        } else if (scaledScrollSpeed >= 6) {
            for (let i = 0; i < scrollSpeed - 2; i++) {
                walkingIcons[walkingIndex].style.display = "none";
                walkingIndex = (walkingIndex + 1) % walkingIconSrcs.length;
                walkingIcons[walkingIndex].style.display = "block";
            }
        }
    }); 
}

animateWalking2();