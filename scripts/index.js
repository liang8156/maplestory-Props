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
                bar[barKey[j]] = bar[barKey[j]].concat(stuff[stuffKey[i]])
            }
        }
    }
}
putIntoBar({ a, b, c, d, f }, backpack)
console.warn("backpack", backpack)
putIntoBar({ e }, backpack)
console.warn("backpack", backpack)
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 73 || e.keyCode === 105) {
        if (document.getElementById("mybar").style.display == "inline") {
            document.getElementById("mybar").style.display = "none"
        } else {
            document.getElementById("mybar").style.display = "inline"
        }
    }
});

let stuff1 = document.createElement("IMG");
stuff1.setAttribute("src", "image/equipment/神秘冥界幽靈雙弩槍.png");
stuff1.setAttribute("class", "equipment");
stuff1.setAttribute("alt", "The Pulpit Rock");
document.getElementById("figure").appendChild(stuff1);

var stuff2 = document.createElement("IMG");
stuff2.setAttribute("src", "image/equipment/神秘冥界幽靈之弓.png");
stuff2.setAttribute("class", "equipment");
stuff2.setAttribute("alt", "The Pulpit Rock");
document.getElementById("figure").appendChild(stuff2);

var stuff3 = document.createElement("IMG");
stuff3.setAttribute("src", "image/cash/閃炫方塊.png");
stuff3.setAttribute("class", "cash");
stuff3.setAttribute("alt", "The Pulpit Rock");
document.getElementById("figure").appendChild(stuff3);

var stuff4 = document.createElement("IMG");
stuff4.setAttribute("src", "image/consumption/超級藥水.png");
stuff4.setAttribute("class", "consumption");
stuff4.setAttribute("alt", "The Pulpit Rock");
document.getElementById("figure").appendChild(stuff4);

var stuff5 = document.createElement("IMG");
stuff5.setAttribute("src", "image/other/怪物卡.png");
stuff5.setAttribute("class", "other");
stuff5.setAttribute("alt", "The Pulpit Rock");
document.getElementById("figure").appendChild(stuff5);

var stuff6 = document.createElement("IMG");
stuff6.setAttribute("src", "image/cash/精靈商人.png");
stuff6.setAttribute("class", "other");
stuff6.setAttribute("alt", "The Pulpit Rock");
document.getElementById("figure").appendChild(stuff6);