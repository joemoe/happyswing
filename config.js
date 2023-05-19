const MAX_SWING_POWER = 20
const MAX_SWING_DURATION = 2000

const MQTT_URL = "ws://localhost:8083/mqtt"
const MQTT_TOPIC = "s"

const AUDIO_ONTICK = "AUDIO_ONTICK"
const AUDIO_FIXED_SAMPLED = "AUDIO_FIXED_SAMPLED"
const AUDIO_FIXED_MOONSHINE = "AUDIO_FIXED_MOONSHINE"
const AUDIO_TONES = "AUDIO_TONES"
const AUDIO_PIANO = "AUDIO_PIANO"

const AUDIO_TYPE = AUDIO_PIANO

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
}/* */, {
    type: GENERATOR_MQTT,
    sample: samples[1],
    sampleOffset: 34,
    id: 2
}/* */, {
    type: GENERATOR_MQTT,
    sample: samples[2],
    sampleOffset: 3245,
    id: 3,
}, {
    type: GENERATOR_MQTT,
    sample: samples[1],
    sampleOffset: 123,
    id: 4,
}, {
    type: GENERATOR_MQTT,
    sample: samples[2],
    sampleOffset: 523,
    id: 5,
}, {
    type: GENERATOR_MQTT,
    sample: samples[0],
    sampleOffset: 8917,
    id: 6,
}/**/]

let controls = document.getElementById("controls")
