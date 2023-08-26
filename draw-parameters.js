let parameters = document.getElementById("parameters")

function drawParameters() {
    let html = ""
    
    swings.forEach((itm, indx) => {
        html += "<div>"
        + "<div><b>Swing " + itm.id + "</b></div>"
        + "Window max: " + itm.windowMax + "<br/>"
        + "Level: " + itm.level + "<br />"
        + "Active: " + (itm.active ? 'yes' : 'no')
        + "</div>"
    });

    parameters.innerHTML = html
}