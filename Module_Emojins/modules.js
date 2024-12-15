const emojins={

    happy: "😊",
    sad: "😢",
    love: "❤️",
    laugh: "😂",
    wink: "😉",
    angry: "😡",
    surprised: "😲",
    thumbsUp: "👍",
    cool: "😎",
    cry: "😭",
    party: "🎉",
    cat: "🐱",
    dog: "🐶"
}


function findimojin(imo){
// imo=imo.toLowerCase();
return emojins[imo] ||"this emojin is not exist";
}


module.exports={findimojin};