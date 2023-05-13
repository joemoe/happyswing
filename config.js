const MAX_SWING_POWER = 30
const MAX_SWING_DURATION = 2000

const MQTT_URL = "ws://172.20.10.4:8083/mqtt"
const MQTT_TOPIC = "s"

const AUDIO_ONTICK = "AUDIO_ONTICK"
const AUDIO_FIXED_SAMPLED = "AUDIO_FIXED_SAMPLED"
const AUDIO_FIXED_MOONSHINE = "AUDIO_FIXED_MOONSHINE"

const AUDIO_TYPE = AUDIO_ONTICK

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
    type: GENERATOR_SAMPLE,
    sample: samples[1],
    sampleOffset: 0,
}, {
    type: GENERATOR_SAMPLE,
    sample: samples[1],
    sampleOffset: 0,
}, {
    type: GENERATOR_SAMPLE,
    sample: samples[1],
    sampleOffset: 0,
}, {
    type: GENERATOR_SAMPLE,
    sample: samples[1],
    sampleOffset: 0,
}, {
    type: GENERATOR_SAMPLE,
    sample: samples[1],
    sampleOffset: 0,
}, {
    type: GENERATOR_SAMPLE,
    sample: samples[1],
    sampleOffset: 0,
}]

let controls = document.getElementById("controls")