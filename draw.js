let canvas = document.getElementById("canvas")
let context = canvas.getContext("2d")
let slotSize = 300

function drawSwing(itm, indx) {
    let slotX = indx % 3
    let slotY = Math.floor(indx / 3)

    let rot = itm.swingyness / 100 * Math.PI / 2 + Math.PI/2

    let anchX = slotX * slotSize + slotSize / 2
    let anchY = slotY * slotSize + slotSize / 2

    let rad = slotSize / 2 - slotSize / 16

    let swingX = Math.cos(rot) * rad + anchX;
    let swingY = Math.sin(rot) * rad + anchY;

    context.beginPath()
    context.moveTo(anchX, anchY)
    context.lineTo(swingX, swingY)
    context.stroke()

    context.beginPath()
    context.arc(swingX, swingY, slotSize / 16, 0, Math.PI * 2)
    context.fill()
}

function clearDrawSwing() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}