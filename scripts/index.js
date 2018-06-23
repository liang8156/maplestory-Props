let bar = { equipment: [], consumption: [], other: [], cash: [] }
let a = {
    class: "equipment"
}
let b = {
    class: "consumption"
}
let c = {
    class: "equipment"
}
let d = {
    class: "other"
}
let total = { a, b, c, d }
function putIntoBar(ab) {
    console.warn("分類中", ab)
}
putIntoBar(total)
console.warn(bar)
console.warn(bar.equipment)
console.warn(total)
document.addEventListener('keydown', function (e) {
    console.warn(e.keyCode)
    if (e.keyCode === 73 || e.keyCode === 105) {
        if (document.getElementById("mybar").style.display == "inline") {
            document.getElementById("mybar").style.display = "none"
        } else {
            document.getElementById("mybar").style.display = "inline"
        }
    }
});