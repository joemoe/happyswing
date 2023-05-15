let initAudioPiano = function() {
    piano.forEach((itm, indx) => {
        loadFile(itm, ".mp3")
    })
}

let audioPiano = function() {
    swings.forEach((itm, indx) => {
        if(itm.high <= itm.low) return
        let tune = Math.floor((itm.val - itm.low) / (MAX_SWING_POWER - itm.low) * frequencies.length)
        if(!itm.playing && piano.reverse()[tune]) {
            playFile(piano.reverse()[tune], 400)
            itm.playing = true
            window.setTimeout(function() {
                itm.playing = false
            }, 200 + Math.random() * 200)

        }
    })
}

let piano = [
    "piano/C2", "piano/D2", "piano/E2", "piano/F2", "piano/G2", "piano/A2", "piano/B2", "piano/C3"
]