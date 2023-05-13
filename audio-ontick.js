let audioFilesOntick = [
    ['LilWayne/Kicks/Kick 2', 1, 1, 1, 1 ],
    ['LilWayne/Kicks/Weezy Hit', 1, 0, 1, 0 ],
    ['LilWayne/Snares/Snare 2', 0, 1, 0, 1 ],
    ['LilWayne/Kicks/Hi Hat 4', 0, 0, 1, 1 ],
    ['LilWayne/Sounds/voice 8', 0, 0, 0, 1 ],
    ['LilWayne/Sounds/Weezy Voice 2', 1, 0, 0, 0 ]
]
function audioOntick() {
    swings.forEach((itm, indx) => {
        if(itm.hide || !itm.active) return
        if(audioFilesOntick[indx] && (itm.highTick || itm.lowTick)) {
            if(itm.highTick && itm.direction == 1 && audioFilesOntick[indx][1])
                playFile(audioFilesOntick[indx][0])
            else if(itm.lowTick && itm.direction == 1 && audioFilesOntick[indx][2])
                playFile(audioFilesOntick[indx][0])
            else if(itm.highTick && itm.direction == -1 && audioFilesOntick[indx][3])
                playFile(audioFilesOntick[indx][0])            
            else if(itm.lowTick && itm.direction == -1 && audioFilesOntick[indx][4])
                playFile(audioFilesOntick[indx][0])
        }
    })
}

function initAudioOntick() {
    audioFilesOntick.forEach((itm, indx) => {
        loadFile(itm[0])
    })
}