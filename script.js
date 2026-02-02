const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", function () {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 300 + "px";
    noBtn.style.top = Math.random() * 300 + "px";
});

yesBtn.addEventListener("click", function () {
    document.body.innerHTML = `
        <h1 style="text-align:center;">Yay! 💕</h1>
        <p style="text-align:center;">You are my Valentine ❤️</p>
        <img src="images/pic2.jpg" style="display:block;margin:auto;width:250px;">
    `;
});
