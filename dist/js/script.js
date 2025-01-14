const umbrxSection = document.getElementById("section-umbrx");
const insideSection = document.getElementById("section-inside");
const btnShowUmbrx = document.getElementById("btn-show-umbrx");
const btnShowInside = document.getElementById("btn-show-inside");

// Toggle visibility
btnShowUmbrx.addEventListener("click", () => {
    umbrxSection.classList.remove("hidden");
    insideSection.classList.add("hidden");
});

btnShowInside.addEventListener("click", () => {
    insideSection.classList.remove("hidden");
    umbrxSection.classList.add("hidden");
});

// Button actions for "UmbrX Bot"
document.getElementById("btn-try-umbrx").addEventListener("click", () => {
    window.open("https://wa.me/6288293456464", "_blank");
});
document.getElementById("btn-support-umbrx").addEventListener("click", () => {
    window.open("https://chat.whatsapp.com/FxEYZl2UyzAEI2yhaH34Ye", "_blank");
});

// Button actions for "Kirito Assalam"
document.getElementById("btn-try-krtsslm").addEventListener("click", function() {
    window.open("https://wa.me/6283845066757", "_blank");
});
document.getElementById("btn-support-krtsslm").addEventListener("click", function() {
    window.open("https://chat.whatsapp.com/IMXSad7rOtc80BH5hkbWPe", "_blank");
});

// Button actions for "Akselia Yourbae"
document.getElementById("btn-try-kslyrb").addEventListener("click", function() {
    window.open("https://wa.me/6288271525726", "_blank");
});
document.getElementById("btn-support-kslyrb").addEventListener("click", function() {
    window.open("https://chat.whatsapp.com/FxEYZl2UyzAEI2yhaH34Ye", "_blank");
});

// Button actions for "Kamisato Ayaka"
document.getElementById("btn-try-kmstyk").addEventListener("click", function() {
    window.open("https://wa.me/6288293456464", "_blank");
});
document.getElementById("btn-support-kmstyk").addEventListener("click", function() {
    window.open("https://chat.whatsapp.com/FxEYZl2UyzAEI2yhaH34Ye", "_blank");
});