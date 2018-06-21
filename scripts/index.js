
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 73 || e.keyCode === 105) {
        if (document.getElementById("mybar").style.display == "inline") {
            document.getElementById("mybar").style.display = "none"
        } else {
            document.getElementById("mybar").style.display = "inline"
        }
    }
});