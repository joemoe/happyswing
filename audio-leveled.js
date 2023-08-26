let leveledInstruments = {
    base: [
        "base-1",
        "base-2",
        "base-3"
    ], 
    anthem: [
        "anthem-1",
        "anthem-2",
        "anthem-3"        
    ],
    percussion: [
        "percussion-1",
        "percussion-2",
        "percussion-3"        
    ],
    hiHat: [
        "hi-hat-1",
        "hi-hat-2",
        "hi-hat-3"        
    ],
    cymbalsShaker: [
        "cymbals-shaker-1",
        "cymbals-shaker-2",
        "cymbals-shaker-3"        
    ],
    snareClap: [
        "snare-clap-1",
        "snare-clap-2",
        "snare-clap-3"        
    ],

}

function initAudioLeveled() {
    ['base', 'anthem'].forEach(instrument => {
        leveledInstruments[instrument].forEach(file => loadFile("tracks/" + file, ".mp3"))
    })
}


let leveledBufferSources = []
function audioLeveled() {
    swings.forEach((itm, indx) => {
        if(itm.levelChanged) {
            //console.log("tracks/" + leveledInstruments[itm.instrument][itm.level - 1])
            if(leveledBufferSources[indx]) leveledBufferSources[indx].stop()
            leveledBufferSources[indx] = playFile("tracks/" + leveledInstruments[itm.instrument][itm.level])
        }
    })
}