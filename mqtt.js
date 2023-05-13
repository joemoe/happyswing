const client = mqtt.connect(MQTT_URL)
client.subscribe(MQTT_TOPIC)

let swingMap = {}

swings.forEach((itm, indx) => swingMap[itm.id] = indx)

client.on("message", function (topic, payload) {
    let msg = JSON.parse(payload)
    if(msg['id'] && swingMap[msg['id']])
        swings[swingMap[msg['id']]].val = payload['acc_z']
})