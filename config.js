const MAX_SWING_POWER = 20
const MAX_SWING_DURATION = 2000

const MQTT_URL = "ws://10.0.1.2:8083/mqtt"
const MQTT_TOPIC = "s"

const AUDIO_ONTICK = "AUDIO_ONTICK"
const AUDIO_FIXED_SAMPLED = "AUDIO_FIXED_SAMPLED"
const AUDIO_FIXED_MOONSHINE = "AUDIO_FIXED_MOONSHINE"
const AUDIO_TONES = "AUDIO_TONES"
const AUDIO_PIANO = "AUDIO_PIANO"
const AUDIO_LEVELED = "AUDIO_LEVELED"

const AUDIO_TYPE = AUDIO_LEVELED

// Generator types
const GENERATOR_SAMPLE = "GENERATOR_SAMPLE"
/**
 * {
 *  type: GENERATOR_SAMPLE,
 *  sample: samples[x],
 *  sampleOffset: 4894
 * }
 */
const GENERATOR_SIMULATION = "GENERATOR_SIMULATION"
/**
 * {
 *  type: GENERATOR_SAMPLE,
 *  speed: 1
 * }
 */
const GENERATOR_MQTT = "GENERATOR_MQTT"
/**
 * {
 *  type: GENERATOR_MQTT,
 *  id: 1
 * }
 */

let swings = [{
    type: GENERATOR_MQTT,
    sample: samples[0],
    sampleOffset: 0,
    id: 1,
    levels: [4, 5.7, 5.9],
    //levels: [5.5, 5.7, 5.9],
    instrument: "base",
    param: "acc_z",
    paramFac: 1
}/* */, {
    type: GENERATOR_MQTT,
    sample: samples[1],
    sampleOffset: 34,
    id: 2,
    levels: [10, 13, 14],
    instrument: "anthem",
    param: "acc_z",
    paramFac: 1
} /* */, {
    type: GENERATOR_MQTT,
    sample: samples[2],
    sampleOffset: 3245,
    id: 3,
    levels: [22, 24, 26],
    instrument: "percusssion",
    param: "acc_x",
    paramFac: 1
}, {
    type: GENERATOR_MQTT,
    sample: samples[1],
    sampleOffset: 123,
    id: 4,
    levels: [22, 24, 26],
    instrument: "hiHat",
    param: "acc_z",
    paramFac: 1
}, {
    type: GENERATOR_MQTT,
    sample: samples[2],
    sampleOffset: 523,
    id: 5,
    levels: [22, 24, 26],
    instrument: "cymbalsShaker",
    param: "acc_z",
    paramFac: 1

}, {
    type: GENERATOR_MQTT,
    sample: samples[0],
    sampleOffset: 8917,
    id: 6,
    levels: [12, 14, 16],
    instrument: "snareClap",
    param: "acc_z",
    paramFac: 1

}/**/]

let controls = document.getElementById("controls")