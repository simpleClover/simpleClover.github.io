var navlink = document.querySelector('#nav-link');
document.addEventListener("keydown", function (event) {
    if (event.altKey && event.key.toUpperCase() === "K") {
        navlink.click();
    }
});