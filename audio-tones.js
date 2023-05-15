let initAudioTones = function() {


}

let audioTones = function() {
    swings.forEach((itm, indx) => {
        let tune = Math.floor((itm.val - itm.low) / (MAX_SWING_POWER - itm.low) * frequencies.length)
        if(!itm.playing && frequencies.reverse()[tune]) {
            playOsc(frequencies.reverse()[tune])
            itm.playing = true
            window.setTimeout(function() {
                itm.playing = false
            }, 200)
        }
    })
}

let frequencies = [
    264, 297, 330, 352, 396, 440, 528
]

function playOsc(frequency) {
    let attackTime = 0.01;
    let sustainTime = 0.05;
    let decayTime = 0;
    let releaseTime = 0.01;

    let osc = audio.createOscillator();
	let gain = audio.createGain();

	osc.connect(gain);
	gain.connect(audio.destination);

	let now = audio.currentTime;
	gain.gain.cancelScheduledValues(now);
	gain.gain.setValueAtTime(0, now);

	//attack
	gain.gain.linearRampToValueAtTime(0.8, now + attackTime);
	//decay
	gain.gain.linearRampToValueAtTime(1, now + attackTime + decayTime);
	//sustain
	gain.gain.linearRampToValueAtTime(1, now + attackTime + decayTime + sustainTime);
	//release
	gain.gain.linearRampToValueAtTime(0, now + attackTime + decayTime + sustainTime + releaseTime);

	osc.frequency.value = frequency;

	osc.type = "sine";
	osc.start(now);
}