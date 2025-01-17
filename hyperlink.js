const hyperlinkInstagram = document.getElementById("instagram");
const hyperlinkX = document.getElementById("x");
const hyperlinkRed = document.getElementById("red");
const hyperlinkEmail = document.getElementById("email");

hyperlinkInstagram.addEventListener("click", function() {
    window.open("https://www.instagram.com/sexy.robot/", "_blank");
});

hyperlinkX.addEventListener("click", function() {
    window.open("https://x.com/Chris461597", "_blank");
});

hyperlinkRed.addEventListener("click", function() {
    window.open("https://www.xiaohongshu.com/user/profile/5c87447c000000001201e4aa?xsec_token=AB1D9EF9dySBJRgxO0fwUM1rr6Of5KtlTc0XH86zxI69g%3D&xsec_source=pc_search", "_blank");
});

hyperlinkEmail.addEventListener("click", function() {
    // 复制邮箱到剪贴板
    navigator.clipboard.writeText("cwu14932@gmail.com");
    
    // 创建并显示提示元素
    const toast = document.createElement("div");
    toast.textContent = "Copied";
    toast.style.cssText = `
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        padding: 10px 20px;
        border-radius: 0px;
        font-size: 14px;
        z-index: 1000;
        pointer-events: none;
        font-family: "Quicksand", sans-serif;
    `;
    
    document.body.appendChild(toast);
    
    // 1秒后移除提示
    setTimeout(() => {
        toast.remove();
    }, 1000);
});