'use strict'

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.getElementById('edit-canvas')
        // console.log('gCanvas -1', gCanvas);
    gCtx = gCanvas.getContext('2d')
        // console.log('gCtx -2', gCtx);
    onRenderGallery();
}

// function onDrawCanvas() {
//     drawImg();
//     drawText();
// }
function onSaveMeme() {
    setMemeSave()
}

function onRenderGallery() {
    var elMemeContainer = document.querySelector('.canvas-area')
    elMemeContainer.style.display = 'none';
    var imges = getImgesForDisplay()
    var strHtml = imges.map(img => {
        return `<img src="${img.url}" onclick="onSelectedImg(${img.id})" >`
    })
    var elGalleryArea = document.querySelector('.gallery-area')
    elGalleryArea.style.display = 'block';
    var elGalleryContainer = document.querySelector('.gallery-container')
    elGalleryContainer.innerHTML = strHtml.join('');

}

function onRenderCanvas() {
    var elMemeContainer = document.querySelector('.canvas-area')
    elMemeContainer.style.display = 'flex';
    var elGalleryArea = document.querySelector('.gallery-area')
    elGalleryArea.style.display = 'none';

}

function onSelectedImg(imgId) {
    createMeme(imgId);
    onRenderCanvas(imgId)
        // console.log(imgId, '??', Number(imgId));
        // gMeme.selectedImgId = Number(imgId)
    drawImg(imgId);
}

function drawImg(imgId) {
    var currImgObj = getImgById(imgId)
    var img = new Image();
    img.src = `${currImgObj.url}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        gMeme.lines.forEach(line => {
            drawText(
                line.txt,
                line.posX,
                line.posY,
                line.size,
                line.align,
                line.color,
                line.lineWidth
            )
        });

    }
}

function onTypeText(txt) {
    var elInput = document.querySelector('.meme-text')
    elInput.value = txt;
    setText(txt)

    // var text = txt;
    // createMeme(text);
}

// function drawText() {
//     const MEME = getCurrMeme()
//     const CURR_LINE = MEME.lines[MEME.selectedLineIdx]
//     console.log('meme', MEME, ' CURR: ', CURR_LINE);
//     gCtx.lineWidth = `${CURR_LINE.lineWidth}`
//     gCtx.strokeStyle = `${CURR_LINE.color}`;
//     // gCtx.fillStyle = `${CURR_LINE.}`
//     gCtx.font = `${CURR_LINE.size}px impact`;
//     gCtx.textAlign = `${CURR_LINE.align}`;
//     gCtx.fillText(CURR_LINE.txt, CURR_LINE.posX, CURR_LINE.posY);
//     gCtx.strokeText(CURR_LINE.txt, CURR_LINE.posX, CURR_LINE.posY);
//     // gCtx.strokeStyle = 'black';
//     // gCtx.strokeRect(0, 25, 500, 80);
//     // // gCtx.strokeRect(, );

// }

function drawText(txt, posX, posY, size, align, color, lineWidth) {
    gCtx.lineWidth = lineWidth;
    gCtx.strokeStyle = color;
    gCtx.fillStyle = 'white';
    gCtx.font = `${size}px impact`;
    gCtx.textAlign = align;
    gCtx.fillText(txt, posX, posY)
    gCtx.strokeText(txt, posX, posY)
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function onSetSize(size = -1) {
    setFontSize(size)
}

// function onEditBts(desirableAction) {
//     switch (desirableAction) {
//         case 'trash':
//             setText('')
//             break;
//         case 'increase-font':
//             setFontSize(1)
//             break;
//         case 'decrease-font':
//             setFontSize(-1)
//             break;
//             // case 'line-up':
//             //     setLinePos(-5)
//             //     break;
//             // case 'line-down':
//             //     setLinePos(5)
//             //     break;

//     }

// }
function onAlignSelected(alignPos) {
    console.log('what am i :', alignPos);
    switch (alignPos) {
        case 'align-left':
            setAlignPos('left')
            break;
        case 'align-center':
            setAlignPos('center')
            break;
        case 'align-right':
            setAlignPos('right')
            break;
    }
}

function handleKey(event) {
    event.preventDefault()
    switch (event.key) {
        case 'ArrowLeft':
            onChaneLineRTL(-5)
            break;
        case 'ArrowRight':
            onChaneLineRTL(+5)
            break;
        case 'ArrowUp':
            setLinePos(-5)
            break;
        case 'ArrowDown':
            setLinePos(5)
            break;

    }

}



function checkEventPos(ev) {

    console.log('event: ', ev.offsetY);
    console.log('event: ', ev.offsetX);


}

function onChaneLinePos(diff) {
    setLinePos(diff)

}

function onChaneLineRTL(diff) {
    setLineRTL(diff)
}

function onAddLine() {
    addLine()
    drawImg()
}

function onSwitchLine(ev) {
    // debugger
    if (!gMeme.selectedLineIdx) {
        gMeme.selectedLineIdx = 1
    } else if (gMeme.selectedLineIdx === 1) {
        gMeme.selectedLineIdx = 2
    } else {
        gMeme.selectedLineIdx = 0
    }
}