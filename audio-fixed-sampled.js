let audioFilesFixedSampled = [
    ['LilWayne/Kicks/Kick 2', 1, 1, 1, 1 ],
    ['LilWayne/Kicks/Weezy Hit', 1, 0, 1, 0 ],
    ['LilWayne/Snares/Snare 2', 0, 1, 0, 1 ],
    ['LilWayne/Kicks/Hi Hat 4', 0, 0, 1, 1 ],
    ['LilWayne/Sounds/voice 8', 0, 0, 0, 1 ],
    ['LilWayne/Sounds/Weezy Voice 2', 1, 0, 0, 0 ]
]
let audioFixedSampledBPM = 120;

function audioFixedSampled() {
}

function initAudioFixedSampled() {
    audioFilesFixedSampled.forEach((itm, indx) => {
        loadFile(itm[0])
    })
}