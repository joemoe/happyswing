const client = mqtt.connect(MQTT_URL)
client.subscribe(MQTT_TOPIC)

let swingMap = {}

swings.forEach((itm, indx) => swingMap[itm.id] = indx)
console.log(swingMap)

client.on("message", function (topic, payload) {
//    console.log([topic, payload].join(": "))
//    console.log([payload].join(':'))
    let msg = JSON.parse([payload].join(':'))

    if(msg['id'] && (swingMap[msg['id']] || swingMap[msg['id']] === 0)) {
        //console.log(msg['id'], (new Date()).getTime(), msg)
        swings[swingMap[msg['id']]].val = msg[swings[swingMap[msg['id']]].param] * swings[swingMap[msg['id']]].paramFac
        //console.log(swings[swingMap[msg['id']]].val, msg['id'], swings[swingMap[msg['id']]].param, msg)
    }

})