let backpack = { equipment: [], consumption: [], other: [], cash: [] }

let 神秘冥界幽靈雙弩槍 = {
    class: "equipment",
    filePostion: "image/equipment/神秘冥界幽靈雙弩槍.png",
    name: "神秘冥界幽靈雙弩槍",
}
let 超級藥水 = {
    class: "consumption",
    filePostion: "image/consumption/超級藥水.png",
    name: "超級藥水"
}
let 神秘冥界幽靈之弓 = {
    class: "equipment",
    filePostion: "image/equipment/神秘冥界幽靈之弓.png",
    name: "神秘冥界幽靈之弓"
}
let 怪物卡 = {
    class: "other",
    filePostion: "image/other/怪物卡.png",
    name: "怪物卡"
}
let 閃炫方塊 = {
    class: "cash",
    filePostion: "image/cash/閃炫方塊.png",
    name: "閃炫方塊"
}
let 精靈商人 = {
    class: "cash",
    filePostion: "image/cash/精靈商人.png",
    name: "精靈商人"
}
let total = { 神秘冥界幽靈雙弩槍, 超級藥水, 神秘冥界幽靈之弓, 怪物卡, 閃炫方塊, 精靈商人 }

for (let i = 0; i < Object.keys(total).length; i++) {
    //stuff 為裝備內容
    let stuffName = Object.keys(total)[i]
    let stuff = total[stuffName];
    let stuffIMG = document.createElement("IMG");
    stuffIMG.setAttribute("src", stuff.filePostion);
    stuffIMG.setAttribute("alt", "The Pulpit Rock");
    stuffIMG.setAttribute('onclick', "putIntoBar(" + stuffName + ",backpack)");
    document.getElementById("figure").appendChild(stuffIMG);
}

function putIntoBar(stuff, bar) {
    //stuff 為輸入裝備
    //barKey 為分類類別
    let barKey = Object.keys(bar)
    for (let j = 0; j < barKey.length; j++) {
        if (stuff.class === barKey[j]) {
            bar[barKey[j]] = bar[barKey[j]].concat(stuff)
        }
    }
    console.warn("bar", bar)
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 73 || e.keyCode === 105) {
        if (document.getElementById("mybar").style.display == "inline") {
            document.getElementById("mybar").style.display = "none"
            console.warn("backpack", backpack)
        } else {
            document.getElementById("mybar").style.display = "inline"
        }
    }
});
