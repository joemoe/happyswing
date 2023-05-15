function swingSimulation(time, itm, indx) {
    return Math.cos(time/(500 * itm.speed)) * 100
}

function swingSample(time, itm, indx) {
    let slot = Math.floor((itm.sampleOffset + time)/50) % itm.sample.length
    itm.val = itm.sample[slot]
    return swing(time, itm, indx)
}

function swing(time, itm, indx) {
    if(!itm.lastVal) itm.lastVal = itm.val
    if(!itm.direction) itm.direction = 1
    if(!itm.dataDirection) itm.dataDirection = 1
    if(!itm.lastLowTime) itm.lastLowTime = 0
    if(!itm.cycleTime) itm.cycleTime = 0
    if(!itm.lastHighTime) itm.lastHighTime = 0

    itm.highTick = itm.lowTick = false
                    
    if(itm.dataDirection == 1 && itm.lastVal > itm.val) {
        itm.dataDirection = -1
        itm.high = itm.lastVal
        itm.lastHighTime = time
        itm.highTick = true
    } else if(itm.dataDirection == -1 && itm.lastVal < itm.val) {
        itm.dataDirection = 1
        itm.low = itm.lastVal
        if(itm.lastLowTime) itm.cycleTime = time - itm.lastLowTime
        itm.lastLowTime = time
        itm.direction *= -1
        itm.lowTick = true 
    }
    itm.lastVal = itm.val

    itm.active = true
    if(time - itm.lastHighTime > MAX_SWING_DURATION) itm.active = false

    swings[indx] = itm

    if(itm.lastLowTime && itm.cycleTime)
        return ((time - itm.lastLowTime) / itm.cycleTime - 0.5) * 200 * itm.high / MAX_SWING_POWER * itm.direction
    return 0
}

function step (time) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    swings.forEach((itm, indx) => {  
        if(itm.hide) return;

        let swingyness = 0

        switch(itm.type) {
            case GENERATOR_SIMULATION:
                swingyness = swingSimulation(time, itm, indx)
                break;
            case GENERATOR_SAMPLE:
                swingyness = swingSample(time, itm, indx)
                break;
            case GENERATOR_MQTT:
                swingyness = swing(time, itm, indx)
                break;
        }
        itm.swingyness = swingyness

        if(!itm.active) return
        if(drawSwing) drawSwing(itm, indx)
    })
    audioTick()

    window.requestAnimationFrame(step)
}
window.requestAnimationFrame(step)