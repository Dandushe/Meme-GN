'use strict'
// console.log('test');
const STORAGE_KEY = 'saved-memes';

var gMeme;

var gKeywords = { 'happy': 12, 'funny puk': 1 }

var gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'meme-imgs/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'meme-imgs/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'meme-imgs/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'meme-imgs/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'meme-imgs/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'meme-imgs/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'meme-imgs/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'meme-imgs/14.jpg', keywords: ['happy'] },
    { id: 15, url: 'meme-imgs/15.jpg', keywords: ['happy'] }

];

function createMeme(imgId) {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [{
                txt: 'Line',
                posX: 250,
                posY: 80,
                size: 50,
                align: 'center',
                color: 'black',
                lineWidth: 1.5

            },
            {
                txt: 'Line-2',
                posX: 250,
                posY: 420,
                size: 50,
                align: 'center',
                color: 'black',
                lineWidth: 1.5
            },

        ]
    }
    console.log('GMEMEMEME', gMeme);
}

function getImgById(imgId) {
    var img = gImgs.find(img => {
            // console.log('img.id', img.id, 'imgID', imgId);
            return img.id === imgId
        })
        // console.log('is it? :', img);
    return img
}

function getImgesForDisplay() {
    return gImgs;
}

function getCurrMeme() {
    return gMeme;
}

function setText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    drawImg(gMeme.selectedImgId)
    console.log(txt);

}

function setFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff
    drawImg(gMeme.selectedImgId)
}

function setLinePos(diff) {
    gMeme.lines[gMeme.selectedLineIdx].posY += diff;
    drawImg(gMeme.selectedImgId)
}

function setLineRTL(diff) {
    gMeme.lines[gMeme.selectedLineIdx].posX += diff;
    drawImg(gMeme.selectedImgId)
}

function setAlignPos(alignSelectet) {
    gMeme.lines[gMeme.selectedLineIdx].align = alignSelectet
    drawImg(gMeme.selectedImgId)
}


function addLine() {
    gMeme.lines.push({
        txt: 'Enter Text Here',
        fontSize: 50,
        align: 'center',
        color: 'black',
        posX: gCanvas.width / 2,
        posY: gCanvas.height / 2,
    })
}

function setMemeSave() {
    saveToStorage(STORAGE_KEY, savedMemes)
}