let backpack = { equipment: [], consumption: [], other: [], cash: [] }
let a = {
    class: "equipment",
    name: "e1"
}
let b = {
    class: "consumption",
    name: "c1"
}
let c = {
    class: "equipment",
    name: "e2"
}
let d = {
    class: "other",
    name: "o1"
}
let f = {
    class: "cash",
    name: "ca1"
}

let e = {
    class: "cash",
    name: "ca2"
}

function putIntoBar(stuff, bar) {
    //stuffKey 為輸入裝備
    //barKey 為分類類別
    let stuffKey = Object.keys(stuff)
    let barKey = Object.keys(bar)
    for (let i = 0; i < stuffKey.length; i++) {
        for (let j = 0; j < barKey.length; j++) {
            if (stuff[stuffKey[i]].class === barKey[j]) {　//若輸入裝備的class === 分類類別　則將該裝備放入bar
                bar[barKey[j]] = bar[barKey[j]].concat([stuff[stuffKey[i]]])
            }
        }
    }
}
putIntoBar({ a, b, c, d, f }, backpack)
putIntoBar({ e }, backpack)
console.warn("backpack", backpack)
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