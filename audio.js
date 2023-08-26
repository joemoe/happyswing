let audio = null
let fileBuffer = {}
let audioInited = false

function loadFile(file, ending = ".wav") {
    var audioURL='audio/' + file + ending
    var request = new XMLHttpRequest()
    request.open("GET",audioURL,true)
    request.responseType='arraybuffer'
    request.addEventListener('load', function() {
        audio.decodeAudioData(request.response, function(buffer){ 
            fileBuffer[file] = buffer
        });
    });
    request.send();
} 

function playFile(file, duration = 0) {
    var source = audio.createBufferSource()
    source.connect(audio.destination)
    source.buffer = fileBuffer[file]
    source.start(0)
    if(duration) window.setTimeout(_ => source.stop(), duration)
    return source
}

let playing = false;
function audioTick() {
    if(!audioInited) return

    switch(AUDIO_TYPE) {
        case AUDIO_ONTICK:
            audioOntick()
            break;
        case AUDIO_TONES:
            audioTones()
            break;
        case AUDIO_PIANO:
            audioPiano()
            break;
        case AUDIO_LEVELED:
            audioLeveled()
            break;
}
}

function initAudio() {
    document.getElementById("audio").remove()
    audio = new AudioContext();
    switch(AUDIO_TYPE) {
        case AUDIO_ONTICK:
            initAudioOntick()
            break;
        case AUDIO_TONES:
            initAudioTones()
            break;
        case AUDIO_PIANO:
            initAudioPiano()
            break;
        case AUDIO_LEVELED:
            initAudioLeveled()
            break;
    }
    audioInited = true
}

controls.innerHTML = controls.innerHTML + '<a href="javascript:initAudio()" id="audio">Activate Audio</a>'